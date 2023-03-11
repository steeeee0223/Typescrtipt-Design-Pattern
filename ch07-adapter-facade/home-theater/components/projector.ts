export class Projector {
    /**
     * on
     */
    public on() {
        console.log("Projector on...");
    }

    /**
     * off
     */
    public off() {
        console.log("Projector off...");
    }

    /**
     * tvModel
     */
    public tvModel() {
        console.log("Projector in TV mode (4x3 aspect ratio)...");
    }

    /**
     * wideScreenModel
     */
    public wideScreenModel() {
        console.log("Projector in widescreen mode (16x9 aspect ratio)...");
    }

    /**
     * toString
     */
    public toString(): string {
        return this.constructor.name;
    }
}
