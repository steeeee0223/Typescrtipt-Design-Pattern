/**
 * Observer
 * @description An observer
 */
export interface Observer {
    update(duck: QuackObservable): void;
}

/**
 * QuackObservable
 * @description A subject of an observer
 */
export interface QuackObservable {
    registerObserver(observer: Observer): void;
    notifyObservers(): void;
}
