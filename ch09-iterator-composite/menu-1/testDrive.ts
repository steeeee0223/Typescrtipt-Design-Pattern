import { DinerMenu, PancakeHouseMenu } from "./menus";
import { Waitress } from "./waitress";

export class MenuTestDrive {
    public static main(): void {
        const pancakeHouseMenu = new PancakeHouseMenu();
        const dinerMenu = new DinerMenu();

        const waitress = new Waitress(pancakeHouseMenu, dinerMenu);
        waitress.printMenu();
    }
}
