export interface WeaponBehavior {
    useWeapon(): void
}

export class AxeBehavior implements WeaponBehavior {
    useWeapon(): void {
        console.log("using axe...")
    }
}

export class BowAndArrowBehavior implements WeaponBehavior {
    useWeapon(): void {
        console.log("using bow and arrow...")
    }
}

export class KnifeBehavior implements WeaponBehavior {
    useWeapon(): void {
        console.log("using knife...")
    }

}

export class SwordBehavior implements WeaponBehavior {
    useWeapon(): void {
        console.log("using sword...")
    }
}