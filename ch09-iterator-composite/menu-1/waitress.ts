import { DinerMenu, Iterator, PancakeHouseMenu } from "./menus";

export class Waitress {
    constructor(
        public pancakeHouseMenu: PancakeHouseMenu,
        public dinerMenu: DinerMenu
    ) {}

    public printMenu() {
        const pancakeIter: Iterator = this.pancakeHouseMenu.createIterator();
        const dinerIter: Iterator = this.dinerMenu.createIterator();

        console.log("MENU\n----\nBREAKFAST");
        this.iterMenu(pancakeIter);
        console.log("\nLUNCH");
        this.iterMenu(dinerIter);
    }

    private iterMenu(iter: Iterator) {
        while (iter.hasNext()) {
            const item = iter.next();
            console.log(`${item.name}, ${item.price} -- ${item.description}`);
        }
    }
}
