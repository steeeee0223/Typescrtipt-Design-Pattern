import {
    Amplifier,
    Projector,
    StreamingPlayer,
    TheaterLights,
    Tuner,
    Screen,
    PopcornPopper,
} from "./components";

export class HomeTheaterFacade {
    constructor(
        public amp: Amplifier,
        public tuner: Tuner,
        public player: StreamingPlayer,
        public projector: Projector,
        public lights: TheaterLights,
        public screen: Screen,
        public popper: PopcornPopper
    ) {}

    /**
     * watchMovie
     */
    public watchMovie(movie: string) {
        console.log(`Get ready to watch movie ${movie}...`);
        this.popper.on();
        this.popper.pop();
        this.lights.dim(10);
        this.screen.down();
        this.projector.on();
        this.projector.wideScreenModel();
        this.amp.on();
        this.amp.setStreamPlayer(this.player);
        this.amp.setStereoSound();
        this.amp.setVolume(5);
        this.player.on();
        this.player.play(movie);
    }

    /**
     * endMovie
     */
    public endMovie() {
        console.log("Shutting movie theater down...");
        this.popper.off();
        this.lights.on();
        this.screen.up();
        this.projector.off();
        this.amp.off();
        this.player.stop();
        this.player.off();
    }

    /**
     * listenToRadio
     */
    public listenToRadio(frequency: number) {
        console.log("Tuning in the airwaves...");
        this.tuner.on();
        this.tuner.setFrequency(frequency);
        this.amp.on();
        this.amp.setVolume(5);
        this.amp.setTuner(this.tuner);
    }

    /**
     * endRadio
     */
    public endRadio() {
        console.log("Shutting down the tuner...");
        this.tuner.off();
        this.amp.off();
    }
}
