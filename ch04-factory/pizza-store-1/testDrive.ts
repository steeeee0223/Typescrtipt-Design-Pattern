import { SimplePizzaFactory } from "./pizzaFactory";
import { PizzaStore } from "./pizzaStore";

export class PizzaStoreTestDrive {
    public static main(): void {
        const factory = new SimplePizzaFactory();
        const store = new PizzaStore(factory);
        store.orderPizza("cheese");
    }
}
