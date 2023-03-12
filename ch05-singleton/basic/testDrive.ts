export class Singleton {
    private static _uniqueInstance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        return this._uniqueInstance ?? new Singleton();
    }
}

export class SingletonTestDrive {
    public static main(): void {
        const s = Singleton.getInstance();
        console.log(s);
    }
}
