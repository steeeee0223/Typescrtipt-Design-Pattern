import { Beverage } from "../beverages";

export abstract class CondimentDecorator extends Beverage {
    abstract b: Beverage

    public abstract get description(): string
}