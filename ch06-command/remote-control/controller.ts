import { Command, NoCommand } from "./commands";

export class RemoteControl {
    public onCommands!: Array<Command>;
    public offCommands!: Array<Command>;
    public undoCommand!: Command;

    constructor() {
        const noCommand = new NoCommand();
        this.onCommands = new Array<Command>(7).fill(noCommand);
        this.offCommands = new Array<Command>(7).fill(noCommand);
        this.undoCommand = noCommand;
    }

    /**
     * setCommand
     */
    public setCommand(
        slot: number,
        onCommand: Command,
        offCommand: Command
    ): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    /**
     * onButtonWasPushed
     */
    public onButtonWasPushed(slot: number): void {
        this.onCommands[slot].execute();
        this.undoCommand = this.onCommands[slot];
    }

    /**
     * offButtonWasPushed
     */
    public offButtonWasPushed(slot: number): void {
        this.offCommands[slot].execute();
        this.undoCommand = this.offCommands[slot];
    }

    /**
     * undoButtonWasPushed
     */
    public undoButtonWasPushed() {
        this.undoCommand.undo();
    }

    /**
     * toString
     */
    public toString(): string {
        let strBuffer = Buffer.concat([]);
        strBuffer = Buffer.concat([
            strBuffer,
            Buffer.from("\n---- Remote Control ----\n"),
        ]);

        for (let i = 0; i < 7; i++) {
            const msg = `[slot ${i}] ${this.onCommands[i].constructor.name} - ${this.offCommands[i].constructor.name}\n`;
            strBuffer = Buffer.concat([strBuffer, Buffer.from(msg)]);
        }
        strBuffer = Buffer.concat([
            strBuffer,
            Buffer.from(`[undo] ${this.undoCommand.constructor.name}\n`),
        ]);
        return strBuffer.toString();
    }
}
