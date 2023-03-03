import { CeilingFan } from "../devices";
import { Command } from "./command";

export class CeilingFanOnCammand implements Command {
    public ceilingFan!: CeilingFan;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    public execute(): void {
        this.ceilingFan.high();
        this.ceilingFan.getSpeed();
    }

    public undo(): void {
        this.ceilingFan.off();
        this.ceilingFan.getSpeed();
    }
}

export class CeilingFanOffCammand implements Command {
    public ceilingFan!: CeilingFan;
    private _prevSpeed!: number;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    public execute(): void {
        this._prevSpeed = this.ceilingFan.getSpeed();
        this.ceilingFan.off();
        this.ceilingFan.getSpeed();
    }

    public undo(): void {
        switch (this._prevSpeed) {
            case CeilingFan.HIGH:
                this.ceilingFan.high();
                break;
            case CeilingFan.MEDIUM:
                this.ceilingFan.medium();
                break;
            case CeilingFan.LOW:
                this.ceilingFan.low();
                break;
            case CeilingFan.OFF:
                this.ceilingFan.off();
                break;
            default:
                console.log("prevSpeed not specified");
                break;
        }
        this.ceilingFan.getSpeed();
    }
}
