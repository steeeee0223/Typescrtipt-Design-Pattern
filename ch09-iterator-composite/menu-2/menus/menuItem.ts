export class MenuItem {
    private _name: string;
    private _description: string;
    private _isVegetarian: boolean;
    private _price: number;

    constructor(
        name: string,
        description: string,
        isVegetarian: boolean,
        price: number
    ) {
        this._name = name;
        this._description = description;
        this._isVegetarian = isVegetarian;
        this._price = price;
    }

    public get name(): string {
        return this._name;
    }

    public get description(): string {
        return this._description;
    }

    public get price(): number {
        return this._price;
    }

    public get isVegetarian(): boolean {
        return this._isVegetarian;
    }
}
