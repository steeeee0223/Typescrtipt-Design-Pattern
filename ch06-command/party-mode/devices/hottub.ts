export class Hottub {
    constructor() {}

    public circulate() {
        console.log("Hottub circulating...");
    }

    public jetsOn() {
        console.log("Hottub jets on...");
    }

    public jetsOff() {
        console.log("Hottub jets off...");
    }

    public setTemperature(temperature: number) {
        console.log(`Hottub temperature is set to ${temperature}º...`);
    }
}
