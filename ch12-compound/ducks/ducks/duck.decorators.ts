import { Quackable } from "./duck.types";

/**
 * QuackCounter
 * @description A decorator
 */
export class QuackCounter extends Quackable {
    private static _count: number = 0;

    constructor(public duck: Quackable) {
        super();
    }

    public quack(): void {
        this.duck.doQuack();
        QuackCounter._count++;
    }

    public static get quacks(): number {
        return QuackCounter._count;
    }

    public toString(): string {
        return this.duck.constructor.name;
    }
}
