export abstract class CaffeineBeverage {
    public prepareRecipe(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    public abstract brew(): void;

    public abstract addCondiments(): void;

    public boilWater(): void {
        console.log("Boiling water...");
    }

    public pourInCup(): void {
        console.log("Pouring into cup...");
    }
}
