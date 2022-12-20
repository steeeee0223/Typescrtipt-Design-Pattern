export abstract class Beverage {
    _description: string = "Unknown Beverage"

    public get description(): string {
        return this._description
    }

    public abstract cost(): number
}