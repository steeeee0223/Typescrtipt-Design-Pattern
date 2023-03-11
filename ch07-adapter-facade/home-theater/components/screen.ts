export class Screen {
    /**
     * up
     */
    public up() {
        console.log("Screen up...");
    }

    /**
     * down
     */
    public down() {
        console.log("Screen down...");
    }

    /**
     * toString
     */
    public toString(): string {
        return this.constructor.name;
    }
}
