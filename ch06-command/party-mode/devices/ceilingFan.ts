export class CeilingFan {
    private _speed!: number;

    public static HIGH: number = 3;
    public static MEDIUM: number = 2;
    public static LOW: number = 1;
    public static OFF: number = 0;

    constructor(public place: string) {}

    public high() {
        this._speed = CeilingFan.HIGH;
    }

    public medium() {
        this._speed = CeilingFan.MEDIUM;
    }

    public low() {
        this._speed = CeilingFan.LOW;
    }

    public off() {
        this._speed = CeilingFan.OFF;
    }

    public getSpeed(): number {
        console.log(`Speed of ${this.place} ceiling fan is ${this._speed}...`);
        return this._speed;
    }
}
