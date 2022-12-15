import { Measurements, Observer } from ".";

export interface Subject {
    registerObserver(o: Observer): void,
    removeObserver(o: Observer): void,
    notifyObserver(): void,
}

export class WeatherData implements Subject {
    private _observers: Observer[] = []
    private _measurements!: Measurements

    public registerObserver(o: Observer) {
        this._observers.push(o)
        console.log("Registerd!")
    }

    public removeObserver(o: Observer) {
        this._observers.forEach((observer, index) => {
            if (observer == o) this._observers.splice(index, 1)
        })
        console.log("Removed")
    }

    public notifyObserver() {
        console.log("new information...")
        this._observers.map((observer) => observer.update(this._measurements))
    }

    public measurementsChanged(): void {
        this.notifyObserver()
    }

    public get measurements(): Measurements {
        return this._measurements
    }

    public set measurements(measurements: Measurements) {
        this._measurements = measurements
        this.measurementsChanged()
    }
}