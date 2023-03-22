import { sys } from "typescript";

import machines from "./db/machines.json";
import { GumballMachine } from "./machine";
import { GumballMonitor } from "./monitor";
import { GumballMachineRemote } from "./remote";

export class GumballMachineTestDrive {
    public static async main(...args: string[]): Promise<void> {
        if (args.length < 2) {
            console.log("GumballMachine <name> <inventory>");
            sys.exit(1);
        }

        try {
            let [location, count] = args;
            const machine = new GumballMachine(location, Number(count));
            console.log(machine.state.constructor.name);
        } catch (error) {
            console.error(error);
        }
    }
}

export class GumballMonitorTestDrive {
    public static main(): void {
        const monitors: GumballMonitor[] = new Array();

        for (const { location, count } of machines) {
            try {
                const machine = new GumballMachine(location, count);
                monitors.push(new GumballMonitor(machine));
            } catch (error) {
                console.error(error);
            }
        }

        for (const monitor of monitors) {
            monitor.report();
        }
    }
}
