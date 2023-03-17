import { MenuComponent } from "./menuComponent";

export class NullIterator implements IterableIterator<MenuComponent> {
    public items: MenuComponent[] = [];

    *[Symbol.iterator](): IterableIterator<MenuComponent> {
        while (this.hasNext()) {
            yield this.next().value;
        }
    }

    public next(): IteratorResult<MenuComponent, any> {
        return {
            done: true,
            value: null,
        };
    }

    public hasNext(): boolean {
        return false;
    }
}
