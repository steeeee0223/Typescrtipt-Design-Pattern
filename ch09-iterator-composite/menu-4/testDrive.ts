import { cafe, dessert, diner, Menu, pancakeHouse } from "./menus";
import { Waitress } from "./waitress";

export class MenuTestDrive {
    public static main(): void {
        const pancakeHouseMenu = new Menu("PANCAKE HOUSE MENU", "Breakfast");
        const dinerMenu = new Menu("DINER MENU", "Lunch");
        const cafeMenu = new Menu("CAFE MENU", "Dinner");
        const dessertMenu = new Menu("DESSERT MENU", "Dessert of course!");
        const allMenus = new Menu("ALL MENUS", "All menus combined");

        allMenus.add(pancakeHouseMenu);
        allMenus.add(dinerMenu);
        allMenus.add(cafeMenu);

        for (const item of pancakeHouse) {
            pancakeHouseMenu.add(item);
        }
        for (const item of diner) {
            dinerMenu.add(item);
        }
        for (const item of cafe) {
            cafeMenu.add(item);
        }
        for (const item of dessert) {
            dessertMenu.add(item);
        }

        dinerMenu.add(dessertMenu);

        const waitress = new Waitress(allMenus);
        waitress.printMenu();
    }
}
