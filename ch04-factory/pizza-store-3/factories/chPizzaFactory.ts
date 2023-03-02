import {
    BlackOlives,
    Cheese,
    Clams,
    Dough,
    Eggplant,
    FrozenClams,
    MozarellaCheese,
    Pepperoni,
    PlumTomatoSauce,
    Sauce,
    SlicedPepperoni,
    Spinach,
    ThinCrustDough,
    Veggies,
} from "../ingredients";
import { PizzaIngredientFactory } from "./factory";

export class CHPizzaIngredientFactory implements PizzaIngredientFactory {
    public createDough(): Dough {
        return new ThinCrustDough();
    }
    public createSauce(): Sauce {
        return new PlumTomatoSauce();
    }
    public createCheese(): Cheese {
        return new MozarellaCheese();
    }
    public createVeggies(): Veggies[] {
        let veggies: Veggies[] = [
            new BlackOlives(),
            new Spinach(),
            new Eggplant(),
        ];
        return veggies;
    }
    public createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }
    public createClams(): Clams {
        return new FrozenClams();
    }
}
