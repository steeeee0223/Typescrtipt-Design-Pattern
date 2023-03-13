import { Iterator } from "./iterator";
import { MenuItem } from "./menuItem";
import { PancakeHouseMenuIterator } from "./pancakeHouseMenuIterator";

export class PancakeHouseMenu {
    public menuItems!: Array<MenuItem>;

    constructor() {
        this.menuItems = new Array<MenuItem>();
        this.addItem(
            "K&B's Pancake Breakfast",
            "Pancakes with scrambled eggs and toast",
            true,
            2.99
        );
        this.addItem(
            "Regular Pancake Breakfast",
            "Pancakes with fried eggs, sausage",
            false,
            2.99
        );
        this.addItem(
            "Blueberry Pancakes",
            "Pancakes made with fresh blueberries",
            true,
            3.49
        );
        this.addItem(
            "Waffles",
            "Waffles with your choice of blueberries or strawberries",
            true,
            3.59
        );
    }

    public addItem(
        name: string,
        description: string,
        isVegetarian: boolean,
        price: number
    ): void {
        const menuItem = new MenuItem(name, description, isVegetarian, price);
        this.menuItems.push(menuItem);
    }

    public createIterator(): Iterator {
        return new PancakeHouseMenuIterator(this.menuItems);
    }
}
