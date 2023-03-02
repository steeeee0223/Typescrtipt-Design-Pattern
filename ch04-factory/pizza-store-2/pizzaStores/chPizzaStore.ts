import {
    CHStyleCheesePizza,
    CHStyleClamPizza,
    CHStylePepperoniPizza,
    CHStyleVeggiePizza,
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

        switch (type) {
            case "cheese":
                pizza = new CHStyleCheesePizza();
                break;
            case "pepperoni":
                pizza = new CHStylePepperoniPizza();
                break;
            case "clam":
                pizza = new CHStyleClamPizza();
                break;
            case "veggie":
                pizza = new CHStyleVeggiePizza();
                break;
            default:
                pizza = {} as Pizza;
                break;
        }

        return pizza;
    }
}
