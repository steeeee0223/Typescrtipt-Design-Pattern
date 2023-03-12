import {
    CeilingFanOffCammand,
    CeilingFanOnCammand,
    GarageDoorDownCammand,
    GarageDoorUpCammand,
    LightOffCammand,
    LightOnCammand,
    StereoOffCommand,
    StereoOnWithCDCommand,
} from "./commands";
import { RemoteControl } from "./controller";
import { CeilingFan, GarageDoor, Light, Stereo } from "./devices";

export class RemoteTestDrive {
    public static remoteControl: RemoteControl;

    public static setup() {
        const remoteControl = new RemoteControl();

        const livingRoomLight = new Light("Living Room");
        const kitchenLight = new Light("Kitchen");
        const ceilingFan = new CeilingFan("Living Room");
        const garageDoor = new GarageDoor();
        const stereo = new Stereo("Living Room");

        remoteControl.setCommand(
            0,
            new LightOnCammand(livingRoomLight),
            new LightOffCammand(livingRoomLight)
        );
        remoteControl.setCommand(
            1,
            new LightOnCammand(kitchenLight),
            new LightOffCammand(kitchenLight)
        );
        remoteControl.setCommand(
            2,
            new CeilingFanOnCammand(ceilingFan),
            new CeilingFanOffCammand(ceilingFan)
        );
        remoteControl.setCommand(
            3,
            new GarageDoorUpCammand(garageDoor),
            new GarageDoorDownCammand(garageDoor)
        );
        remoteControl.setCommand(
            4,
            new StereoOnWithCDCommand(stereo),
            new StereoOffCommand(stereo)
        );

        RemoteTestDrive.remoteControl = remoteControl;
    }

    public static main(_args: string[] = []): void {
        RemoteTestDrive.setup();
        const remoteControl = RemoteTestDrive.remoteControl;
        console.log(remoteControl.toString());

        for (let i = 0; i < 7; i++) {
            remoteControl.onButtonWasPushed(i);
            remoteControl.offButtonWasPushed(i);
            console.log(remoteControl.toString());
            remoteControl.undoButtonWasPushed();
        }
    }
}
