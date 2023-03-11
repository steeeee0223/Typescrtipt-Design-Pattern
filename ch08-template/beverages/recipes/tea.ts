import { CaffeineBeverage } from "./caffeineBeverage";

export class Tea extends CaffeineBeverage {
    public brew(): void {
        console.log("Steeping in the tea...");
    }

    public addCondiments(): void {
        console.log("Adding lemon...");
    }
}
