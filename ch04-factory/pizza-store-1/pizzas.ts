export abstract class Pizza {
    /**
     * prepare
     */
    public prepare() {
        console.log("preparing pizza...");
    }
    /**
     * bake
     */
    public bake() {
        console.log("baking pizza...");
    }
    /**
     * cut
     */
    public cut() {
        console.log("cutting pizza...");
    }
    /**
     * box
     */
    public box() {
        console.log("putting pizza into a box...");
    }
}

export class CheesePizza extends Pizza {}
export class PepperoniPizza extends Pizza {}
export class ClamPizza extends Pizza {}
export class VeggiePizza extends Pizza {}
