import { Beverage } from "../beverages"
import { CondimentDecorator } from "."

export class Mocha extends CondimentDecorator {
    constructor(
        public b: Beverage
    ) {
        super()
    }

    public get description(): string {
        return `${this.b.description}, Mocha`
    }

    public cost(): number {
        return this.b.cost() + .20
    }
}

export class Milk extends CondimentDecorator {
    constructor(
        public b: Beverage
    ) {
        super()
    }

    public get description(): string {
        return `${this.b.description}, Milk`
    }

    public cost(): number {
        return this.b.cost() + .10
    }
}
export class Soy extends CondimentDecorator {
    constructor(
        public b: Beverage
    ) {
        super()
    }

    public get description(): string {
        return `${this.b.description}, Soy`
    }

    public cost(): number {
        return this.b.cost() + .15
    }
}
export class Whip extends CondimentDecorator {
    constructor(
        public b: Beverage
    ) {
        super()
    }

    public get description(): string {
        return `${this.b.description}, Whip`
    }

    public cost(): number {
        return this.b.cost() + .10
    }
}
