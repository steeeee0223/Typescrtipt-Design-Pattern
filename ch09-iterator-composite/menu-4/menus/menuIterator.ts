import { MenuComponent } from "./menuComponent";

export class MenuIterator implements IterableIterator<MenuComponent> {
    public items!: MenuComponent[];
    private position: number = 0;

    constructor(items: MenuComponent[]) {
        this.items = items;
    }

    *[Symbol.iterator](): IterableIterator<MenuComponent> {
        while (this.hasNext()) {
            yield this.next().value;
        }
    }

    public next(): IteratorResult<MenuComponent, any> {
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
