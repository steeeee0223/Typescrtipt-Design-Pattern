import { ChocolateBoiler } from "./boiler";

export class BoilderTestDrive {
    public static main(): void {
        const boiler = ChocolateBoiler.getInstance();
        console.log(`The boiler is empty: ${boiler.isEmpty()}`);
        console.log(`The mixture is boiled: ${boiler.isBoiled()}`);

        boiler.boil();
        boiler.fill();
        boiler.boil();
        boiler.drain();
    }
}
