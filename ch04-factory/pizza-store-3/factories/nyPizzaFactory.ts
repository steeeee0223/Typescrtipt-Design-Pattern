import {
    Cheese,
    Clams,
    Dough,
    FreshClams,
    Garlic,
    MarinaraSauce,
    Mushroom,
    Onion,
    Pepperoni,
    RedPepper,
    ReggianoCheese,
    Sauce,
    SlicedPepperoni,
    ThinCrustDough,
    Veggies,
} from "../ingredients";
import { PizzaIngredientFactory } from "./factory";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    public createDough(): Dough {
        return new ThinCrustDough();
    }
    public createSauce(): Sauce {
        return new MarinaraSauce();
    }
    public createCheese(): Cheese {
        return new ReggianoCheese();
    }
    public createVeggies(): Veggies[] {
        let veggies: Veggies[] = [
            new Garlic(),
            new Onion(),
            new Mushroom(),
            new RedPepper(),
        ];
        return veggies;
    }
    public createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }
    public createClams(): Clams {
        return new FreshClams();
    }
}
