export interface Turkey {
    gobble(): void;
    fly(): void;
}

export class WildTurkey implements Turkey {
    public gobble(): void {
        console.log("Gobble gobble...");
    }

    fly(): void {
        console.log("I'm flying a short distance...");
    }
}
