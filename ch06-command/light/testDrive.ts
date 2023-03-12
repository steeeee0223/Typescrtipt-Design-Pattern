import { Light, LightOnCammand } from "./commands";
import { SimpleRemoteControl } from "./controller";

export class LightTestDrive {
    public static main(): void {
        const remote = new SimpleRemoteControl();
        const light = new Light();
        const lightOn = new LightOnCammand(light);

        remote.setCommand(lightOn);
        remote.buttonWasPressed();
    }
}
