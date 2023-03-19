export enum Status {
    SOLD_OUT = 0,
    NO_QUARTER = 1,
    HAS_QUARTER = 2,
    SOLD = 3,
}

export interface State {
    insertQuarter(): void;
    ejectQuarter(): void;
    turnCrank(): void;
    dispense(): void;
}
