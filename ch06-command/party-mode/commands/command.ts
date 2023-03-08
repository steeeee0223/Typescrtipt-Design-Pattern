export interface Command {
    execute: () => void;
    undo: () => void;
}

export class NoCommand implements Command {
    /**
     * execute
     */
    public execute() {
        console.log("Nothing happens...");
    }

    /**
     * execute
     */
    public undo() {
        console.log("Nothing happens...");
    }
}
