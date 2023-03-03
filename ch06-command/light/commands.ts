export interface Command {
    execute: () => void;
}

export class Light {
    public on() {
        console.log("Light on...");
    }

    public off() {
        console.log("Light off...");
    }
}

export class LightOnCammand implements Command {
    public light!: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.on();
    }
}
