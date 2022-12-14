import { SwordBehavior, WeaponBehavior } from "./behaviors";

abstract class Character {
    public weapon!: WeaponBehavior;

    constructor(
    ) { }

    abstract fight(): void

    public set setWeapon(weapon: WeaponBehavior) {
        this.weapon = weapon;
    }
}

class King extends Character {
    constructor() {
        super()
        this.weapon = new SwordBehavior()
    }

    fight(): void {
        console.log('The king fights with a sword')
    }
}
