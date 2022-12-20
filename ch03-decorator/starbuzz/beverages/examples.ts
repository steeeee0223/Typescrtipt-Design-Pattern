import { Beverage } from "."

export class Expresso extends Beverage {
    _description: string = "Expresso"

    public cost(): number {
        return 1.99
    }
}

export class HouseBlend extends Beverage {
    _description: string = "House Blend Coffee"

    public cost(): number {
        return .89
    }
}

export class Decaf extends Beverage {
    _description: string = "Decaf"

    public cost(): number {
        return 1.05
    }
}

export class DarkRoast extends Beverage {
    _description: string = "Dark Roast"

    public cost(): number {
        return .99
    }
}