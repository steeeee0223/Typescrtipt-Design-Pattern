import { Observer, QuackObservable } from "./observer.types";

export class Observable implements QuackObservable {
    public observers: Observer[] = new Array();

    constructor(public duck: QuackObservable) {}

    public registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public notifyObservers(): void {
        const iterator: IterableIterator<Observer> = this.observers.values();
        for (const observer of iterator) {
            observer.update(this.duck);
        }
    }
}
