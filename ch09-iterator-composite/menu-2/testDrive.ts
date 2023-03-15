import { CafeMenu, DinerMenu, PancakeHouseMenu } from "./menus";
import { Waitress } from "./waitress";

export class MenuTestDrive {
    public static main(): void {
        const pancakeHouseMenu = new PancakeHouseMenu();
        const dinerMenu = new DinerMenu();
        const cafeMenu = new CafeMenu();

        const waitress = new Waitress(pancakeHouseMenu, dinerMenu, cafeMenu);
        waitress.printMenu();
    }
}
