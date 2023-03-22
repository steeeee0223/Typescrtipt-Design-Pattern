import { GumballMachineRemote } from "./remote";

export class GumballMonitor {
    constructor(public machine: GumballMachineRemote) {}

    public report(): void {
        try {
            console.log(`Gumball Machine: ${this.machine.location}`);
            console.log(`Current inventory: ${this.machine.count} gumballs`);
            console.log(
                `Current state: ${this.machine.state.constructor.name}`
            );
        } catch (error) {
            console.error(error);
        }
    }
}
