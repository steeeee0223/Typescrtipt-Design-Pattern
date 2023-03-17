import { MenuComponent } from "./menus";

export class Waitress {
    public allMenus!: MenuComponent;

    constructor(allMenus: MenuComponent) {
        this.allMenus = allMenus;
    }

    public printMenu(): void {
        this.allMenus.print();
    }
}
