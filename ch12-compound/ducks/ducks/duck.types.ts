import { Observable, Observer, QuackObservable } from "../observers";

/**
 * Quackable
 * @description A template
 */
export abstract class Quackable implements QuackObservable {
    public observable!: Observable;

    constructor() {
        this.observable = new Observable(this);
    }

    public abstract quack(): void;

    public doQuack(): void {
        this.quack();
        this.notifyObservers();
    }

    public registerObserver(observer: Observer): void {
        this.observable.registerObserver(observer);
    }

    public notifyObservers(): void {
        this.observable.notifyObservers();
    }

    public toString(): string {
        return this.constructor.name;
    }
}

/**
 * AbstractDuckFactory
 * @description An abstract factory
 */
export abstract class AbstractDuckFactory {
    public abstract createMallardDuck(): Quackable;
    public abstract createRedheadDuck(): Quackable;
    public abstract createRubberDuck(): Quackable;
    public abstract createDuckCall(): Quackable;
}
