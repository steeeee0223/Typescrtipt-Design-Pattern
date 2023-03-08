import { Hottub } from "../devices";
import { Command } from "./command";

export class HottubOnCammand implements Command {
    public hottub!: Hottub;

    constructor(hottub: Hottub) {
        this.hottub = hottub;
    }

    public execute(): void {
        this.hottub.jetsOn();
        this.hottub.circulate();
    }

    public undo(): void {
        this.hottub.jetsOff();
    }
}

export class HottubOffCammand implements Command {
    public hottub!: Hottub;

    constructor(hottub: Hottub) {
        this.hottub = hottub;
    }

    public execute(): void {
        this.hottub.jetsOff();
    }

    public undo(): void {
        this.hottub.jetsOn();
        this.hottub.circulate();
    }
}
