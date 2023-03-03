import { Stereo } from "../devices";
import { Command } from "./command";

export class StereoOnWithCDCommand implements Command {
    public stereo!: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    public execute() {
        this.stereo.on();
        this.stereo.setCD();
        this.stereo.setVolume(11);
    }

    public undo() {
        this.stereo.off();
    }
}

export class StereoOffCommand implements Command {
    public stereo!: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    public execute() {
        this.stereo.off();
    }

    public undo() {
        this.stereo.on();
        this.stereo.setCD();
        this.stereo.setVolume(11);
    }
}
