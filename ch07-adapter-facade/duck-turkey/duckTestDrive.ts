import { TurkeyAdapter } from "./adapter";
import { Duck, MallardDuck } from "./ducks";
import { Turkey, WildTurkey } from "./turkeys";

export class DuckTestDrive {
    public static main(): void {
        const duck: Duck = new MallardDuck();
        const turkey: Turkey = new WildTurkey();
        const turkeyAdapter: Duck = new TurkeyAdapter(turkey);

        console.log("The turkey says...");
        turkey.gobble();
        turkey.fly();

        console.log("\nThe duck says...");
        this.testDuck(duck);

        console.log("\nThe turkey adapter says...");
        this.testDuck(turkeyAdapter);
    }

    public static testDuck(duck: Duck): void {
        duck.quack();
        duck.fly();
    }
}
