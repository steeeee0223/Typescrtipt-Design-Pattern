export interface FlyBehavior {
    fly(): string
}

export class FlyNoWay implements FlyBehavior {
    fly(): string {
        return "I can't fly..."
    }
}
export class FlyRocketPowered implements FlyBehavior {
    fly(): string {
        return "Flying with a rocket!"
    }
}
export class FlyWithWings implements FlyBehavior {
    fly(): string {
        return "Flying with wings!"
    }
}