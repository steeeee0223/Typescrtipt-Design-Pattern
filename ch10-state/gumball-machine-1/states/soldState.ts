import { GumballMachine } from "../machine";
import { State } from "./state";

export class SoldState implements State {
    constructor(public gumballMachine: GumballMachine) {}

    public insertQuarter(): void {
        console.log("Please wait, we're already giving you a gumball...");
    }

    public ejectQuarter(): void {
        console.log("Sorry, you already turned the crank...");
    }

    public turnCrank(): void {
        console.log("Turning twice does not get you another gumball...");
    }

    public dispense(): void {
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.count > 0) {
            this.gumballMachine.state = this.gumballMachine.noQuarterState;
        } else {
            console.log("Oops, out of gumballs...");
            this.gumballMachine.state = this.gumballMachine.soldOutState;
        }
    }
}
