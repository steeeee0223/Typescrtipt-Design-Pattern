import { Quackable } from "./duck.types";

export class Goose {
    public honk(): void {
        console.log("Honk");
    }
}

/**
 * GooseAdapter
 * @description An adapter
 */
export class GooseAdapter extends Quackable {
    constructor(public goose: Goose) {
        super();
    }

    public quack(): void {
        this.goose.honk();
    }

    public toString(): string {
        return "Goose pretending to be a Duck";
    }
}
