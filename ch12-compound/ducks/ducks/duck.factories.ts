import {
    DuckCall,
    MallardDuck,
    RedheadDuck,
    RubberDuck,
} from "./duck.examples";
import { AbstractDuckFactory, Quackable } from "./duck.types";
import { QuackCounter } from "./duck.decorators";

export class DuckFactory extends AbstractDuckFactory {
    public createMallardDuck(): Quackable {
        return new MallardDuck();
    }

    public createRedheadDuck(): Quackable {
        return new RedheadDuck();
    }

    public createRubberDuck(): Quackable {
        return new RubberDuck();
    }

    public createDuckCall(): Quackable {
        return new DuckCall();
    }
}

export class CountingDuckFactory extends AbstractDuckFactory {
    public createMallardDuck(): Quackable {
        return new QuackCounter(new MallardDuck());
    }

    public createRedheadDuck(): Quackable {
        return new QuackCounter(new RedheadDuck());
    }

    public createRubberDuck(): Quackable {
        return new QuackCounter(new RubberDuck());
    }

    public createDuckCall(): Quackable {
        return new QuackCounter(new DuckCall());
    }
}
