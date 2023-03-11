import { Amplifier } from "./amplifier";

export class StreamingPlayer {
    public amplifier!: Amplifier;
    public movie!: string;

    /**
     * on
     */
    public on() {
        console.log("Streaming player on...");
    }

    /**
     * off
     */
    public off() {
        console.log("Streaming player off...");
    }

    /**
     * pause
     */
    public pause() {
        console.log(`Streaming player paused ${this.movie}...`);
    }

    /**
     * play
     */
    public play(movie: string) {
        this.movie = movie;
        console.log(`Streaming player start playing ${movie}...`);
    }

    /**
     * setSurroundAudio
     */
    public setSurroundAudio() {
        console.log("Streaming player set surround audio...");
    }

    /**
     * setTwoChannelAudio
     */
    public setTwoChannelAudio() {
        console.log("Streaming player set two channel audio...");
    }

    /**
     * stop
     */
    public stop() {
        console.log(`Streaming player stopped ${this.movie}...`);
    }

    /**
     * toString
     */
    public toString(): string {
        return this.constructor.name;
    }
}
