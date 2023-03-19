import { GumballMachine } from "./machine";

export class GumballMachineTestDrive {
    public static main(): void {
        const gumballMachine = new GumballMachine(5);
        console.log(gumballMachine.toString());

        gumballMachine.insertQuarter();
        gumballMachine.turnCrank();

        console.log(gumballMachine.toString());

        gumballMachine.insertQuarter();
        gumballMachine.turnCrank();
        gumballMachine.insertQuarter();
        gumballMachine.turnCrank();

        console.log(gumballMachine.toString());
    }
}
