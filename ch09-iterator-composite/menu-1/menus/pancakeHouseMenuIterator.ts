import { Iterator } from "./iterator";
import { MenuItem } from "./menuItem";

export class PancakeHouseMenuIterator implements Iterator {
    public items!: MenuItem[];
    private position: number = 0;

    constructor(items: MenuItem[]) {
        this.items = items;
    }

    public hasNext(): boolean {
        return this.position < this.items.length;
    }

    public next(): MenuItem {
        return this.items[this.position++];
    }
}
