import { Menu, MenuItem } from "./menus";

export class Waitress {
    public menus!: Menu[];

    constructor(...menus: Menu[]) {
        this.menus = menus;
    }

    public printMenu() {
        console.log("MENU\n----\n");
        for (const menu of this.menus) {
            this.iterMenu(menu.createIterator());
            console.log("\n");
        }
    }

    private iterMenu(iter: Iterable<MenuItem>) {
        for (let item of iter) {
            console.log(`${item.name}, ${item.price} -- ${item.description}`);
        }
    }
}
