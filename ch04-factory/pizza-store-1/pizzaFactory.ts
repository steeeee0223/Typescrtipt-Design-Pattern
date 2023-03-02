import {
    CheesePizza,
    ClamPizza,
    PepperoniPizza,
    Pizza,
    VeggiePizza,
} from "./pizzas";

export class SimplePizzaFactory {
    /**
     * createPizza
     */
    public createPizza(type: string): Pizza {
        let pizza: Pizza;

        switch (type) {
            case "cheese":
                pizza = new CheesePizza();
                break;
            case "pepperoni":
                pizza = new PepperoniPizza();
                break;
            case "clam":
                pizza = new ClamPizza();
                break;
            case "veggie":
                pizza = new VeggiePizza();
                break;
            default:
                pizza = {} as Pizza;
                break;
        }

        return pizza;
    }
}
