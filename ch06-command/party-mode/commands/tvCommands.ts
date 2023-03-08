import { TV } from "../devices";
import { Command } from "./command";

export class TVOnCammand implements Command {
    public tv!: TV;

    constructor(tv: TV) {
        this.tv = tv;
    }

    public execute(): void {
        this.tv.on();
        this.tv.setInputChannel(25);
        this.tv.setVolume(12);
    }

    public undo(): void {
        this.tv.off();
    }
}

export class TVOffCammand implements Command {
    public tv!: TV;

    constructor(tv: TV) {
        this.tv = tv;
    }

    public execute(): void {
        this.tv.off();
    }

    public undo(): void {
        this.tv.on();
        this.tv.setInputChannel(25);
        this.tv.setVolume(12);
    }
}
