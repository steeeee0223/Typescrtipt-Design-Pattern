export interface Iterator<T> {
    hasNext(): boolean;
    next(): T;
    remove(): void;
}

export interface Enumeration<T> {
    hasMoreElements(): boolean;
    nextElement(): T;
}

export class EnumerationIterator<T> implements Iterator<T> {
    constructor(public enumeration: Enumeration<T>) {}

    public hasNext(): boolean {
        return this.enumeration.hasMoreElements();
    }

    public next(): T {
        return this.enumeration.nextElement();
    }

    public remove(): void {
        throw new Error("Method not implemented.");
    }
}

export class IteratorEnumeration<T> implements Enumeration<T> {
    constructor(public iterator: Iterator<T>) {}

    public hasMoreElements(): boolean {
        return this.iterator.hasNext();
    }

    public nextElement(): T {
        return this.iterator.next();
    }
}
