import { Command } from "./commands";

export class SimpleRemoteControl {
    public slot!: Command;

    constructor() {}

    public setCommand(command: Command): void {
        this.slot = command;
    }

    public buttonWasPressed(): void {
        this.slot.execute();
    }
}
