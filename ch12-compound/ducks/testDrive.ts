import {
    AbstractDuckFactory,
    CountingDuckFactory,
    Flock,
    Goose,
    GooseAdapter,
    Quackable,
    QuackCounter,
} from "./ducks";
import { Quackologist } from "./observers";

export class DuckSimulator {
    public static main(): void {
        const simulator = new DuckSimulator();
        const duckFactory = new CountingDuckFactory();

        simulator.simulate(duckFactory);
    }

    public simulate(duckFactory: AbstractDuckFactory): void {
        console.log(`\n[Duck Simulator] With Composite - Flocks`);

        const flockOfDucks = new Flock();
        flockOfDucks.add(duckFactory.createRedheadDuck());
        flockOfDucks.add(duckFactory.createDuckCall());
        flockOfDucks.add(duckFactory.createRubberDuck());
        flockOfDucks.add(new GooseAdapter(new Goose()));

        const flockOfMallards = new Flock();
        flockOfMallards.add(duckFactory.createMallardDuck());
        flockOfMallards.add(duckFactory.createMallardDuck());
        flockOfMallards.add(duckFactory.createMallardDuck());
        flockOfMallards.add(duckFactory.createMallardDuck());

        flockOfDucks.add(flockOfMallards);
        console.log("[Duck Simulator] Whole Flock Simulation");
        this._simulate(flockOfDucks);
        console.log("[Duck Simulator] Mallard Flock Simulation");
        this._simulate(flockOfMallards);

        console.log("[Duck Simulator] With Observer");
        const quackologist = new Quackologist();
        flockOfDucks.registerObserver(quackologist);
        this._simulate(flockOfDucks);
        console.log(`The ducks quacked ${QuackCounter.quacks} times...`);
    }

    private _simulate(duck: Quackable): void {
        duck.doQuack();
    }
}
