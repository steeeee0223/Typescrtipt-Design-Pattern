import { DinerMenuIterator } from "./dinerMenuIterator";
import { Menu } from "./menu";
import { MenuItem } from "./menuItem";

export class DinerMenu implements Menu {
    public static MAX_ITEMS: number = 6;
    private numItems: number = 0;
    public menuItems!: MenuItem[];

    constructor() {
        this.menuItems = Array<MenuItem>(DinerMenu.MAX_ITEMS);
        this.addItem(
            "Vegetarian BLT",
            "(Fakin') Bacon with lettuce & tomato on whole wheat",
            true,
            2.99
        );
        this.addItem(
            "BLT",
            "Bacon with lettuce & tomato on whole wheat",
            false,
            2.99
        );
        this.addItem(
            "Soup of the day",
            "Soup of the day, with a side of potato salad",
            false,
            3.29
        );
        this.addItem(
            "Hotdog",
            "A hot dog, with sauerkraut, relish, onions, topped with cheese",
            false,
            3.05
        );
    }

    public addItem(
        name: string,
        description: string,
        isVegetarian: boolean,
        price: number
    ): void {
        const menuItem = new MenuItem(name, description, isVegetarian, price);
        if (this.numItems >= DinerMenu.MAX_ITEMS) {
            console.error("Sorry, menu is full! Can't add item to menu");
        } else {
            this.menuItems[this.numItems] = menuItem;
            this.numItems++;
        }
    }

    public createIterator(): IterableIterator<MenuItem> {
        return new DinerMenuIterator(this.menuItems);
    }
}
