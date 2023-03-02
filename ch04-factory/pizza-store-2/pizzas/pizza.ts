export abstract class Pizza {
    private _name!: string;
    public dough!: string;
    public sauce!: string;
    public toppings: string[] = [];

    /**
     * prepare
     */
    public prepare(): void {
        console.log(`Preparing ${this.name}`);
        console.log("Tossing dough...");
        console.log("Adding sauce...");
        console.log(`Adding toppings: ${this.toppings}`);
    }

    /**
     * bake
     */
    public bake(): void {
        console.log("Bake for 25 minutes at 350º...");
    }

    /**
     * cut
     */
    public cut(): void {
        console.log("Cutting the pizza into diagonal slices...");
    }

    /**
     * box
     */
    public box(): void {
        console.log("Place pizza in official PizzaStore box...");
    }

    public get name(): string {
        return this._name;
    }

    public set name(v: string) {
        this._name = v;
    }
}
