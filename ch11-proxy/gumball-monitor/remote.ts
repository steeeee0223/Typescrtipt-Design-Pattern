import { State } from "./states";

export interface GumballMachineRemote {
    count: number;
    location: string;
    state: State;
}
