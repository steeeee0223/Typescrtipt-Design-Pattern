import { MenuItem } from "./menuItem";

export class DinerMenuIterator implements IterableIterator<MenuItem> {
    public items!: MenuItem[];
    private position: number = 0;

    constructor(items: MenuItem[]) {
        this.items = items;
    }

    *[Symbol.iterator](): IterableIterator<MenuItem> {
        for (let item of this.items) {
            if (item) {
                yield item;
            }
        }
    }

    public next(): IteratorResult<MenuItem, any> {
        if (this.hasNext()) {
            return {
                done: false,
                value: this.items[this.position++],
            };
        } else {
            return {
                done: true,
                value: undefined,
            };
        }
    }

    public hasNext(): boolean {
        return (
            this.position < this.items.length &&
            this.items[this.position] !== undefined
        );
    }

    public remove(): void {
        throw new Error("Method not allowed!");
    }
}
