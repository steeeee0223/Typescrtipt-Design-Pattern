import { SimplePizzaFactory } from "./pizzaFactory";
import { Pizza } from "./pizzas";

export class PizzaStore {
    factory!: SimplePizzaFactory;

    constructor(factory: SimplePizzaFactory) {
        this.factory = factory;
    }

    /**
     * orderPizza
     */
    public orderPizza(type: string): Pizza {
        let pizza: Pizza = this.factory.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}
