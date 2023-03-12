import { CHPizzaStore, NYPizzaStore, PizzaStore } from "./pizzaStores";

export class PizzaStoreTestDrive {
    public static main(): void {
        const nyStore: PizzaStore = new NYPizzaStore();
        const chStore: PizzaStore = new CHPizzaStore();

        let pizza1 = nyStore.orderPizza("cheese");
        console.log(`Ethan ordered a ${pizza1.name}`);

        let pizza2 = chStore.orderPizza("cheese");
        console.log(`Joel ordered a ${pizza2.name}`);
    }
}
