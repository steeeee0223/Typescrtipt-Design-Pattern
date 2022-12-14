import { AxeBehavior, SwordBehavior, WeaponBehavior } from "./behaviors";

abstract class Character {
    constructor(
        public weapon: WeaponBehavior
    ) { }

    abstract fight(): void

    public set setWeapon(weapon: WeaponBehavior) {
        this.weapon = weapon;
    }
}

class King extends Character {
    constructor(weapon: WeaponBehavior) {
        super(weapon)
        this.weapon = weapon
    }

    fight(): void {
        this.weapon.useWeapon()
    }
}

const s = new SwordBehavior()
const k = new King(s)
k.fight()  // using sword
const w = new AxeBehavior()
k.weapon = w
k.fight()  // using axe