export class TV {
    constructor(public place: string) {}

    public on() {
        console.log(`${this.place} TV is on...`);
    }

    public off() {
        console.log(`${this.place} TV is off...`);
    }

    public setInputChannel(channel: number) {
        console.log(`Channel of ${this.place} TV is set to ${channel}...`);
    }

    public setVolume(volume: number) {
        console.log(`Volume of ${this.place} TV is set to ${volume}...`);
    }
}
