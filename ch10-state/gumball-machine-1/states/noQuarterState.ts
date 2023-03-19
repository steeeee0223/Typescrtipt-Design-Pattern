import { GumballMachine } from "../machine";
import { State } from "./state";

export class NoQuarterState implements State {
    constructor(public gumballMachine: GumballMachine) {}

    public insertQuarter(): void {
        console.log("You inserted a quarter...");
        this.gumballMachine.state = this.gumballMachine.hasQuarterState;
    }

    public ejectQuarter(): void {
        console.log("You haven't inserted a quarter...");
    }

    public turnCrank(): void {
        console.log("You turned, but there is no quarter...");
    }

    public dispense(): void {
        console.log("You need to pay first...");
    }
}
