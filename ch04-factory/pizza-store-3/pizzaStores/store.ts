import { Pizza } from "../pizzas";

export abstract class PizzaStore {
    /**
     * orderPizza
     */
    public orderPizza(type: string): Pizza {
        let pizza: Pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }

    protected abstract createPizza(type: string): Pizza;
}
