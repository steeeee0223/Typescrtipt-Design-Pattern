export class PopcornPopper {
    /**
     * on
     */
    public on() {
        console.log("Popcorn popper on...");
    }

    /**
     * off
     */
    public off() {
        console.log("Popcorn popper off...");
    }

    /**
     * pop
     */
    public pop() {
        console.log("Start popping popcorn...");
    }

    /**
     * toString
     */
    public toString(): string {
        return this.constructor.name;
    }
}
