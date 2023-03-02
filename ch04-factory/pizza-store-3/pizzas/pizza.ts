import {
    Cheese,
    Clams,
    Dough,
    Pepperoni,
    Sauce,
    Veggies,
} from "../ingredients";

export abstract class Pizza {
    private _name!: string;

    public dough!: Dough;
    public sauce!: Sauce;
    public veggies: Veggies[] = [];
    public cheese!: Cheese;
    public pepperoni!: Pepperoni;
    public clams!: Clams;

    public abstract prepare(): void;

    public bake(): void {
        console.log("Bake for 25 minutes at 350º...");
    }

    public cut(): void {
        console.log("Cutting the pizza into diagonal slices...");
    }

    public box(): void {
        console.log("Place pizza in official PizzaStore box...");
    }

    public get name(): string {
        return this._name;
    }

    public set name(v: string) {
        this._name = v;
    }

    public toString(): string {
        return "";
    }
}
