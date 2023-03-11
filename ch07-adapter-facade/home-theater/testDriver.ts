import {
    Amplifier,
    PopcornPopper,
    Projector,
    Screen,
    StreamingPlayer,
    TheaterLights,
    Tuner,
} from "./components";
import { HomeTheaterFacade } from "./facade";

export class HomeTheaterTestDriver {
    public static main(): void {
        const amp = new Amplifier();
        const tuner = new Tuner(amp);
        const player = new StreamingPlayer();
        const projector = new Projector();
        const screen = new Screen();
        const lights = new TheaterLights();
        const popper = new PopcornPopper();

        const homeTheater = new HomeTheaterFacade(
            amp,
            tuner,
            player,
            projector,
            lights,
            screen,
            popper
        );

        homeTheater.watchMovie("Raiders of the Lost Ark");
        homeTheater.endMovie();
    }
}
