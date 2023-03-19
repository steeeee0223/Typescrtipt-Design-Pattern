import { GumballMachine } from "../machine";
import { State } from "./state";

export class SoldOutState implements State {
    constructor(public gumballMachine: GumballMachine) {}

    public insertQuarter(): void {
        console.log("You can't insert a quarter, the machine is sold out...");
    }

    public ejectQuarter(): void {
        console.log("You can't eject, you haven't inserted a quarter yet...");
    }

    public turnCrank(): void {
        console.log("You turned, but there are no gumballs...");
    }

    public dispense(): void {
        console.log("No gumball dispensed...");
    }
}
