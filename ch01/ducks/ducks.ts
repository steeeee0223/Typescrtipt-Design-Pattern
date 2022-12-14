import { FlyBehavior } from "./flyBehaviors";
import { QuackBehavior } from "./quackBehaviors";

export abstract class Duck {
    public flyBehavior!: FlyBehavior;
    public quackBehavior!: QuackBehavior;
    public duckType!: string;

    constructor() {
    }

    abstract display(): string;

    /**
     * performFly
     */
    public performFly(): string {
        return this.flyBehavior.fly()
    }

    /**
     * performQuack
     */
    public performQuack(): string {
        return this.quackBehavior.quack()
    }

    public swim(): void {
        console.log('All ducks float, even decoys');
    }

    /**
     * adds ability to set behavior at runtime if desired
     * @param fb
     */
    set setFlyBehavior(fb: FlyBehavior) {
        this.flyBehavior = fb;
    }

    /**
     * adds ability to set behavior at runtime if desired
     * @param qb
     */
    set setQuackBehavior(qb: QuackBehavior) {
        this.quackBehavior = qb;
    }


    public behaviorToString(behavior: string): string {
        return `${this.duckType} behavior: ${behavior}`;
    }
}