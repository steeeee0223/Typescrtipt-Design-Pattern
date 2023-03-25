export class IteratorEnumeration<T> implements Enumerator<T> {
    private _done: boolean = false;
    private _item!: T;

    constructor(public iterator: IterableIterator<T>) {}

    public atEnd(): boolean {
        this.moveNext();
        return this._done;
    }

    public item(): T {
        return this._item;
    }

    public moveFirst(): void {
        throw new Error("Method not implemented.");
    }

    public moveNext(): void {
        const { done, value } = this.iterator.next();
        this._done = done ?? true;
        this._item = value;
    }
}
