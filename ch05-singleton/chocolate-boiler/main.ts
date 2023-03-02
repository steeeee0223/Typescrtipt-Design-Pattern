import { ChocolateBoiler } from "./boiler";

const boiler = ChocolateBoiler.getInstance();
console.log(`The boiler is empty: ${boiler.isEmpty()}`);
console.log(`The mixture is boiled: ${boiler.isBoiled()}`);

boiler.boil();
boiler.fill();
boiler.boil();
boiler.drain();
