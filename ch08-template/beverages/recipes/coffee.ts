import { CaffeineBeverage } from "./caffeineBeverage";

export class Coffee extends CaffeineBeverage {
    public brew(): void {
        console.log("Dripping coffee through filter...");
    }

    public addCondiments(): void {
        console.log("Adding sugar and milk...");
    }
}
