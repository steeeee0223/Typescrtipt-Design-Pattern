import { GarageDoor } from "../devices";
import { Command } from "./command";

export class GarageDoorUpCammand implements Command {
    public garageDoor!: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
    }

    public execute(): void {
        this.garageDoor.up();
    }

    public undo(): void {
        this.garageDoor.down();
    }
}

export class GarageDoorDownCammand implements Command {
    public garageDoor!: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
    }

    public execute(): void {
        this.garageDoor.down();
    }

    public undo(): void {
        this.garageDoor.up();
    }
}
