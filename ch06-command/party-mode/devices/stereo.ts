export class Stereo {
    constructor(public place: string) {}

    public on() {
        console.log(`${this.place} stereo on...`);
    }

    public off() {
        console.log(`${this.place} stereo off...`);
    }

    public setCD() {
        console.log("Set CD...");
    }

    public setDVD() {
        console.log("Set DVD...");
    }

    public setRadio() {
        console.log("Set radio...");
    }

    public setVolume(vol: number) {
        console.log(`Set volume to ${vol}...`);
    }
}
