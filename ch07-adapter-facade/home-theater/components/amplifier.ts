import { StreamingPlayer } from "./streamingPlayer";
import { Tuner } from "./tuner";

export class Amplifier {
    public tuner!: Tuner;
    public player!: StreamingPlayer;

    /**
     * on
     */
    public on() {
        console.log("Amplifier on...");
    }

    /**
     * off
     */
    public off() {
        console.log("Amplifier off...");
    }

    /**
     * setStreamPlayer
     */
    public setStreamPlayer(player: StreamingPlayer) {
        console.log(
            `Amplifier setting stream player to ${player.toString()}...`
        );
        this.player = player;
    }

    /**
     * setStereoSound
     */
    public setStereoSound() {
        console.log("Amplifier stereo mode on...");
    }

    /**
     * setSurroundSound
     */
    public setSurroundSound() {
        console.log("Amplifier surround sound on (5 speakers, 1 subwoofer)...");
    }

    /**
     * setTuner
     */
    public setTuner(tuner: Tuner) {
        console.log(`Amplifier setting tuner to ${tuner.toString()}...`);
        this.tuner = tuner;
    }

    /**
     * setVolume
     */
    public setVolume(vol: number) {
        console.log(`Amplifier setting volume to ${vol}...`);
    }

    /**
     * toString
     */
    public toString(): string {
        return this.constructor.name;
    }
}
