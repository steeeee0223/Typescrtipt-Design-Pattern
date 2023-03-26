import { Observer } from "../observers";
import { Quackable } from "./duck.types";

/**
 * Flock
 * @description An iterator in a composite pattern
 */
export class Flock extends Quackable {
    public ducks: Quackable[] = new Array();

    public add(duck: Quackable): void {
        this.ducks.push(duck);
    }

    public quack(): void {
        this.ducks.forEach((duck) => duck.doQuack());
    }

    public registerObserver(observer: Observer): void {
        this.ducks.forEach((duck) => duck.registerObserver(observer));
    }

    public notifyObservers(): void {}
}
