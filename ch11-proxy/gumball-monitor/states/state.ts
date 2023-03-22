import { v4 } from "uuid";
import { GumballMachine } from "../machine";

export interface Serializable {
    serialVersionUID: string;
}

export abstract class State implements Serializable {
    private _serialVersionUID: string = v4();

    constructor(public gumballMachine: GumballMachine) {}

    public get serialVersionUID(): string {
        return this._serialVersionUID;
    }

    public abstract insertQuarter(): void;
    public abstract ejectQuarter(): void;
    public abstract turnCrank(): void;
    public abstract dispense(): void;
}
