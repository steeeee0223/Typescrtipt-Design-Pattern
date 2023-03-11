import { CaffeineBeverageWithHook } from "./caffeineBeverage";

export class TeaWithHook extends CaffeineBeverageWithHook {
    public brew(): void {
        console.log("Steeping in the tea...");
    }

    public addCondiments(): void {
        console.log("Adding lemon...");
    }
}
