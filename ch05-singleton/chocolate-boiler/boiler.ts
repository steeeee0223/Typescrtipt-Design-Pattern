export class ChocolateBoiler {
    private _empty!: boolean;
    private _boiled!: boolean;
    private static _instance: ChocolateBoiler;

    private constructor() {
        this._empty = true;
        this._boiled = false;
    }

    public static getInstance(): ChocolateBoiler {
        return this._instance ?? new ChocolateBoiler();
    }

    /**
     * fill
     */
    public fill(): void {
        if (this.isEmpty()) {
            console.log("Filling the boiler with a milk/chocolate mixture...");
            this._empty = false;
            this._boiled = false;
        } else {
            console.log("The boiler is already filled...");
        }
    }

    /**
     * drain
     */
    public drain(): void {
        if (!this.isEmpty() && this.isBoiled()) {
            console.log("Draining the boiled milk and chocolate...");
            this._empty = true;
        } else {
            console.log("Cannott drain the boiler...");
        }
    }

    /**
     * boil
     */
    public boil(): void {
        if (!this.isEmpty() && !this.isBoiled()) {
            console.log("Bringing the contents to a boil...");
            this._boiled = true;
        } else {
            console.log(
                "Either the boiler is empty or the mixture has already been boiled..."
            );
        }
    }

    /**
     * isEmpty
     */
    public isEmpty(): boolean {
        return this._empty;
    }

    /**
     * isBoiled
     */
    public isBoiled(): boolean {
        return this._boiled;
    }
}
