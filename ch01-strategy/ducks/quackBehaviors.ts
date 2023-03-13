export interface QuackBehavior {
    quack(): string
}

export class MuteQuack implements QuackBehavior {
    public quack(): string {
        return '<< silence >>';
    };
}
export class Squeak implements QuackBehavior {
    public quack(): string {
        return 'Squeak! Squeak!';
    };
}
export class Quack implements QuackBehavior {
    public quack(): string {
        return 'Quack! Quack!';
    };
}