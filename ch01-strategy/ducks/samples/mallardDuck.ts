import { Duck } from "../ducks";
import { FlyWithWings } from "../flyBehaviors";
import { Quack } from "../quackBehaviors";

export class MallardDuck extends Duck {
    constructor() {
        super()
        this.quackBehavior = new Quack()
        this.flyBehavior = new FlyWithWings()
    }

    public display(): string {
        return "I'm a mallard duck!"
    }
}