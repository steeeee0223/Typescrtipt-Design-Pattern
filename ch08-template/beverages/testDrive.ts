import { Tea } from "./recipes";
import { CoffeeWithHook } from "./recipes-with-hook";

export class BeverageTestDrive {
    public static main(): void {
        console.log("\nMaking tea...");
        const tea = new Tea();
        tea.prepareRecipe();

        console.log("\nMaking coffee...");
        const coffeeWithHook = new CoffeeWithHook();
        coffeeWithHook.prepareRecipe();
    }
}
