import { Buffer } from "buffer";

import {
    HasQuarterState,
    NoQuarterState,
    SoldOutState,
    SoldState,
    State,
    WinnerState,
} from "./states";

export class GumballMachine {
    private _soldOutState!: State;
    private _noQuarterState!: State;
    private _hasQuarterState!: State;
    private _soldState!: State;
    private _winnerState!: State;

    private _state!: State;
    private _count: number = 0;

    constructor(numberGumballs: number) {
        this._soldOutState = new SoldOutState(this);
        this._noQuarterState = new NoQuarterState(this);
        this._hasQuarterState = new HasQuarterState(this);
        this._soldState = new SoldState(this);
        this._winnerState = new WinnerState(this);

        this._count = numberGumballs;
        this._state =
            numberGumballs > 0 ? this._noQuarterState : this._soldOutState;
    }

    public set state(state: State) {
        this._state = state;
    }

    public get count(): number {
        return this._count;
    }

    public get soldOutState(): State {
        return this._soldOutState;
    }

    public get noQuarterState(): State {
        return this._noQuarterState;
    }

    public get hasQuarterState(): State {
        return this._hasQuarterState;
    }

    public get soldState(): State {
        return this._soldState;
    }

    public get winnerState(): State {
        return this._winnerState;
    }

    public insertQuarter(): void {
        this._state.insertQuarter();
    }

    public ejectQuarter(): void {
        this._state.ejectQuarter();
    }

    public turnCrank(): void {
        this._state.turnCrank();
        this._state.dispense();
    }

    public releaseBall(): void {
        console.log("A gumball comes rolling out the slot...");
        if (this._count > 0) {
            this._count--;
        }
    }

    public toString(): string {
        const buffers: Buffer[] = [
            Buffer.from("\nMighty Gumball, Inc."),
            Buffer.from("\n* TypeScript-enabled Standing Gumball Model #2023"),
            Buffer.from(`\n* Inventory: ${this._count} gumball(s)`),
            Buffer.from(`\n* Machine state: ${this._state.constructor.name}`),
        ];
        const result = Buffer.concat(buffers);
        return result.toString();
    }
}
