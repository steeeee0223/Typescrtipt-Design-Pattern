import { Command } from "./command";

export class MacroCommand implements Command {
    public commands!: Command[];

    constructor(commands: Command[]) {
        this.commands = commands;
    }

    public execute() {
        for (let i = 0; i < this.commands.length; i++) {
            this.commands[i].execute();
        }
    }

    public undo() {
        for (let i = this.commands.length - 1; i >= 0; i--) {
            this.commands[i].undo();
        }
    }
}
