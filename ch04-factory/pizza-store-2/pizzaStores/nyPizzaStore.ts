import {
    NYStyleCheesePizza,
    NYStyleClamPizza,
    NYStylePepperoniPizza,
    NYStyleVeggiePizza,
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

        switch (type) {
            case "cheese":
                pizza = new NYStyleCheesePizza();
                break;
            case "pepperoni":
                pizza = new NYStylePepperoniPizza();
                break;
            case "clam":
                pizza = new NYStyleClamPizza();
                break;
            case "veggie":
                pizza = new NYStyleVeggiePizza();
                break;
            default:
                pizza = {} as Pizza;
                break;
        }

        return pizza;
    }
}
