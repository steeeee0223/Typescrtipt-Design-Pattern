import {
    Cheese,
    Clams,
    Dough,
    Pepperoni,
    Sauce,
    Veggies,
} from "../ingredients";

export interface PizzaIngredientFactory {
    createDough(): Dough;
    createSauce(): Sauce;
    createCheese(): Cheese;
    createVeggies(): Veggies[];
    createPepperoni(): Pepperoni;
    createClams(): Clams;
}
