export abstract class CaffeineBeverageWithHook {
    public async prepareRecipe(): Promise<void> {
        this.boilWater();
        this.brew();
        this.pourInCup();
        if (await this.customerWantsCondiments()) {
            this.addCondiments();
        }
    }

    public abstract brew(): void;

    public abstract addCondiments(): void;

    public boilWater(): void {
        console.log("Boiling water...");
    }

    public pourInCup(): void {
        console.log("Pouring into cup...");
    }

    public async customerWantsCondiments(): Promise<boolean> {
        return true;
    }
}
