import { Pizza } from "./pizza";

export class NYStyleCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = "NY Style Sauce & Cheese Pizza";
        this.dough = "Thin Crust Dough";
        this.sauce = "Marinara Sause";
        this.toppings.push("Grated Reggiano Cheese");
    }
}
export class NYStylePepperoniPizza extends Pizza {}
export class NYStyleClamPizza extends Pizza {}
export class NYStyleVeggiePizza extends Pizza {}

export class CHStyleCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = "Chicago Style Deep Dish Cheese Pizza";
        this.dough = "Extra Thick Crust Dough";
        this.sauce = "Plum Tomato Sauce";
        this.toppings.push("Shredded Mozzarella Cheese");
    }

    public cut(): void {
        console.log("Cutting the pizza into square slices");
    }
}
export class CHStylePepperoniPizza extends Pizza {}
export class CHStyleClamPizza extends Pizza {}
export class CHStyleVeggiePizza extends Pizza {}
