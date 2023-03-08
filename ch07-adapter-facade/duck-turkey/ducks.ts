export interface Duck {
    quack(): void;
    fly(): void;
}

export class MallardDuck implements Duck {
    public quack(): void {
        console.log("Quack!");
    }

    public fly(): void {
        console.log("I'm flying!");
    }
}
