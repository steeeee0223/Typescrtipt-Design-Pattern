import { DisplayElement } from "."
import { Measurements, Observer, WeatherData } from ".."

export class StatisticsDisplay implements Observer, DisplayElement {
    private _measurements!: Measurements
    private _tempMax: number = -Infinity
    private _tempMin: number = Infinity
    private _tempSum: number = 0
    private _count: number = 0

    constructor(
        private _weatherData: WeatherData
    ) {
        this._weatherData.registerObserver(this)
    }

    public update(measurements: Measurements): void {
        this._measurements = measurements
        const { temperature } = this._measurements
        this._tempSum += temperature
        this._count++
        if (temperature > this._tempMax) this._tempMax = temperature
        if (temperature < this._tempMin) this._tempMin = temperature
        this.display()
    }

    public display(): void {
        console.log(
            `Avg/Max/Min temperature ${this._tempSum / this._count}/`
            + `${this._tempMax}/${this._tempMin}`
        )
    }
}