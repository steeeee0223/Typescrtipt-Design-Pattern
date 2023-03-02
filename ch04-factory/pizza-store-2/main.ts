import { ChicagoPizzaStore, NYPizzaStore, PizzaStore } from "./pizzaStores";

const nyStore: PizzaStore = new NYPizzaStore();
const chicagoStore: PizzaStore = new ChicagoPizzaStore();

let pizza1 = nyStore.orderPizza("cheese");
console.log(`Ethan ordered a ${pizza1.name}`);

let pizza2 = chicagoStore.orderPizza("cheese");
console.log(`Joel ordered a ${pizza2.name}`);
