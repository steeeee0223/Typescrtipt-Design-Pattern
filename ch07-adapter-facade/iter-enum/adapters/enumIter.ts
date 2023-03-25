export class EnumerationIterator<T> implements IterableIterator<T> {
    private _done!: boolean;

    constructor(public enumeration: Enumerator<T>) {}

    *[Symbol.iterator](): IterableIterator<T> {
        while (this.hasNext()) {
            yield this.next().value;
        }
    }

    public next(): IteratorResult<T, T> {
        const item = this.enumeration.item();
        return {
            done: this._done,
            value: item,
        };
    }

    public hasNext(): boolean {
        this._done = !this.enumeration.atEnd();
        return this._done;
    }
}
