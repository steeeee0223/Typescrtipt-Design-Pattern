import { Duck } from "./ducks";
import { Turkey } from "./turkeys";

export class TurkeyAdapter implements Duck {
    public turkey!: Turkey;

    constructor(turkey: Turkey) {
        this.turkey = turkey;
    }

    public quack(): void {
        this.turkey.gobble();
    }

    public fly(): void {
        for (let i = 0; i < 5; i++) {
            this.turkey.fly();
        }
    }
}
