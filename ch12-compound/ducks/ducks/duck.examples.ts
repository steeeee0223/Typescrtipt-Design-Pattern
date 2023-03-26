import { Quackable } from "./duck.types";

export class MallardDuck extends Quackable {
    public quack(): void {
        console.log("Quack");
    }
}

export class RedheadDuck extends Quackable {
    public quack(): void {
        console.log("Quack");
    }
}

export class DuckCall extends Quackable {
    public quack(): void {
        console.log("Kwak");
    }
}

export class RubberDuck extends Quackable {
    public quack(): void {
        console.log("Squeak");
    }
}
