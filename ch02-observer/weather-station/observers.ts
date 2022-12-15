import { Measurements } from ".";

export interface Observer {
    update(measurements: Measurements): void
}