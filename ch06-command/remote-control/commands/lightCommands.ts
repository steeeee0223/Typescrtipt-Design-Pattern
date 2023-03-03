import { Light } from "../devices";
import { Command } from "./command";

export class LightOnCammand implements Command {
    public light!: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.on();
    }

    public undo(): void {
        this.light.off();
    }
}

export class LightOffCammand implements Command {
    public light!: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.off();
    }

    public undo(): void {
        this.light.on();
    }
}
