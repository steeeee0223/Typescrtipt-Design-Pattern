import { CHPizzaIngredientFactory } from "../factories";
import {
    CheesePizza,
    ClamPizza,
    PepperoniPizza,
    VeggiePizza,
    Pizza,
} from "../pizzas";
import { PizzaStore } from "./store";

/**
 * @classdesc Chicago Pizza Store
 */
export class CHPizzaStore extends PizzaStore {
    /**
     * createPizza
     */
    public createPizza(type: string): Pizza {
        let pizza: Pizza;
        const ingredientFactory = new CHPizzaIngredientFactory();

        switch (type) {
            case "cheese":
                pizza = new CheesePizza(ingredientFactory);
                pizza.name = "Chicago Style Cheese Pizza";
                break;
            case "pepperoni":
                pizza = new PepperoniPizza(ingredientFactory);
                pizza.name = "Chicago Style Cheese Pizza";
                break;
            case "clam":
                pizza = new ClamPizza(ingredientFactory);
                pizza.name = "Chicago Style Clam Pizza";
                break;
            case "veggie":
                pizza = new VeggiePizza(ingredientFactory);
                pizza.name = "Chicago Style Veggie Pizza";
                break;
            default:
                pizza = {} as Pizza;
                break;
        }

        return pizza;
    }
}
