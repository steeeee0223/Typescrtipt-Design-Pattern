import { DisplayElement } from "."
import { Measurements, Observer, WeatherData } from ".."

export class CurrentConditionsDisplay implements Observer, DisplayElement {
    private _measurements!: Measurements

    constructor(
        private _weatherData: WeatherData
    ) {
        this._weatherData.registerObserver(this)
    }

    public update(measurements: Measurements): void {
        this._measurements = measurements
        this.display()
    }

    public display(): void {
        const { temperature, humidity } = this._measurements
        console.log(`Current conditions: temperature ${temperature} degrees and humidity ${humidity}`)
    }
}