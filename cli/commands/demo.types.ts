export interface TestDrive {
    main: (() => void) | ((...args: string[]) => void);
}

export type Driver = {
    drive: TestDrive;
    args?: string[];
};

export type Apps = {
    [key: string]: {
        [key: string]: Driver[];
    };
};

export type Result = {
    name: string;
    drivers: Driver[];
};
