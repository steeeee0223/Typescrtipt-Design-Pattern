export class Light {
    constructor(public place: string) {}

    public on() {
        console.log(`${this.place} light is on...`);
    }

    public off() {
        console.log(`${this.place} light is off...`);
    }
}
