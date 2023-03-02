import { NYPizzaIngredientFactory } from "../factories";
import {
    CheesePizza,
    ClamPizza,
    PepperoniPizza,
    VeggiePizza,
    Pizza,
} from "../pizzas";
import { PizzaStore } from "./store";

/**
 * @classdesc New York Pizza Store
 */
export class NYPizzaStore extends PizzaStore {
    /**
     * createPizza
     */
    public createPizza(type: string): Pizza {
        let pizza: Pizza;
        const ingredientFactory = new NYPizzaIngredientFactory();

        switch (type) {
            case "cheese":
                pizza = new CheesePizza(ingredientFactory);
                pizza.name = "New York Style Cheese Pizza";
                break;
            case "pepperoni":
                pizza = new PepperoniPizza(ingredientFactory);
                pizza.name = "New York Style Cheese Pizza";
                break;
            case "clam":
                pizza = new ClamPizza(ingredientFactory);
                pizza.name = "New York Style Clam Pizza";
                break;
            case "veggie":
                pizza = new VeggiePizza(ingredientFactory);
                pizza.name = "New York Style Veggie Pizza";
                break;
            default:
                pizza = {} as Pizza;
                break;
        }

        return pizza;
    }
}
