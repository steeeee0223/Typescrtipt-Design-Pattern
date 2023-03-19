import { GumballMachine } from "../machine";
import { State } from "./state";

export class HasQuarterState implements State {
    constructor(public gumballMachine: GumballMachine) {}

    public insertQuarter(): void {
        console.log("You can't insert another quarter...");
    }

    public ejectQuarter(): void {
        console.log("Quarter returned...");
        this.gumballMachine.state = this.gumballMachine.noQuarterState;
    }

    public turnCrank(): void {
        console.log("You turned...");
        this.gumballMachine.state = this.gumballMachine.soldState;
    }

    public dispense(): void {
        console.log("No gumball dispensed...");
    }
}
