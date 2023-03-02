import { PizzaIngredientFactory } from "../factories";
import { Pizza } from "./pizza";

export class CheesePizza extends Pizza {
    ingredientFactory!: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    public prepare(): void {
        console.log(`Preparing ${this.name}...`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    }
}
export class PepperoniPizza extends Pizza {
    ingredientFactory!: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    public prepare(): void {
        console.log(`Preparing ${this.name}...`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.pepperoni = this.ingredientFactory.createPepperoni();
    }
}
export class VeggiePizza extends Pizza {
    ingredientFactory!: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    public prepare(): void {
        console.log(`Preparing ${this.name}...`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.veggies = this.ingredientFactory.createVeggies();
    }
}
export class ClamPizza extends Pizza {
    ingredientFactory!: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    public prepare(): void {
        console.log(`Preparing ${this.name}...`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.clams = this.ingredientFactory.createClams();
    }
}
