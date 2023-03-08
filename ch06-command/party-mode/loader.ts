import {
    Command,
    HottubOffCammand,
    HottubOnCammand,
    LightOffCammand,
    LightOnCammand,
    MacroCommand,
    StereoOffCommand,
    StereoOnWithCDCommand,
    TVOffCammand,
    TVOnCammand,
} from "./commands";
import { RemoteControl } from "./controller";
import { Hottub, Light, Stereo, TV } from "./devices";

export class RemoteLoader {
    public static remoteControl: RemoteControl;

    public static setup() {
        const remoteControl = new RemoteControl();

        const light = new Light("Living Room");
        const tv = new TV("Living Room");
        const stereo = new Stereo("Living Room");
        const hottub = new Hottub();

        const partyOn: Command[] = [
            new LightOnCammand(light),
            new TVOnCammand(tv),
            new StereoOnWithCDCommand(stereo),
            new HottubOnCammand(hottub),
        ];
        const partyOff: Command[] = [
            new LightOffCammand(light),
            new TVOffCammand(tv),
            new StereoOffCommand(stereo),
            new HottubOffCammand(hottub),
        ];

        remoteControl.setCommand(
            0,
            new MacroCommand(partyOn),
            new MacroCommand(partyOff)
        );

        RemoteLoader.remoteControl = remoteControl;
    }

    public static main(_args: string[] = []): void {
        RemoteLoader.setup();
        const remoteControl = RemoteLoader.remoteControl;
        console.log(remoteControl.toString());

        console.log("--- Pushing Macro On ---");
        remoteControl.onButtonWasPushed(0);
        console.log("--- Pushing Macro Off ---");
        remoteControl.offButtonWasPushed(0);
        console.log("--- Pushing Macro Undo ---");
        remoteControl.undoButtonWasPushed();
    }
}
