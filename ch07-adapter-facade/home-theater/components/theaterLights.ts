export class TheaterLights {
    /**
     * on
     */
    public on() {
        console.log("Theater lights on...");
    }

    /**
     * off
     */
    public off() {
        console.log("Theater lights off...");
    }

    /**
     * dim
     */
    public dim(num: number) {
        console.log(`Theater lights dimming to ${num} ...`);
    }

    /**
     * toString
     */
    public toString(): string {
        return this.constructor.name;
    }
}
