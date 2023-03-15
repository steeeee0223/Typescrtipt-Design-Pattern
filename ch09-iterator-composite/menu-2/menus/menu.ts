import { MenuItem } from "./menuItem";

export interface Menu {
    addItem(
        name: string,
        description: string,
        isVegetarian: boolean,
        price: number
    ): void;
    createIterator(): Iterable<MenuItem>;
}
