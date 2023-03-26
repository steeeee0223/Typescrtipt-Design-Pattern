import { Observer, QuackObservable } from "./observer.types";

export class Quackologist implements Observer {
    public update(duck: QuackObservable): void {
        console.log(`[Quackologist] ${duck} just quacked...`);
    }
}
