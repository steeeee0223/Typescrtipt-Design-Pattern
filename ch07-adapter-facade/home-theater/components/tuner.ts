import { Amplifier } from "./amplifier";

export class Tuner {
    public amplifier!: Amplifier;
    public frequency!: number;

    constructor(amplifier: Amplifier) {
        this.amplifier = amplifier;
    }

    /**
     * on
     */
    public on() {
        console.log("Tuner on...");
    }

    /**
     * off
     */
    public off() {
        console.log("Tuner off...");
    }

    /**
     * setAm
     */
    public setAm() {
        console.log(`Tuner setting to AM mode...`);
    }

    /**
     * setFm
     */
    public setFm() {
        console.log(`Tuner setting to FM mode...`);
    }

    /**
     * setFrequency
     */
    public setFrequency(frequency: number) {
        console.log(`Tuner setting frequency to ${frequency}...`);
        this.frequency = frequency;
    }

    /**
     * toString
     */
    public toString(): string {
        return this.constructor.name;
    }
}
