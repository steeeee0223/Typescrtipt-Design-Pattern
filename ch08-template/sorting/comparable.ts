export interface Comparable<T> {
    compareTo(other: T): number;
}

export class MyArray<T extends Comparable<T>> {
    public items!: Array<T>;

    constructor(...items: T[]) {
        this.items = new Array<T>(...items);
    }

    public sort(compareFn?: (a: T, b: T) => number): T[] {
        if (!compareFn) {
            compareFn = (a: T, b: T) => a.compareTo(b);
        }
        return this.items.sort(compareFn);
    }

    public toString(): string {
        return this.items.toString();
    }
}

Array<object>().sort();
