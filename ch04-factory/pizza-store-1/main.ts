import { SimplePizzaFactory } from "./pizzaFactory";
import { PizzaStore } from "./pizzaStore";

const factory = new SimplePizzaFactory();
const store = new PizzaStore(factory);
store.orderPizza("cheese");
