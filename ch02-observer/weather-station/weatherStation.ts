import { Measurements, WeatherData } from ".";
import { CurrentConditionsDisplay, StatisticsDisplay } from "./displays";

export class WeatherStation {
    public weatherData = new WeatherData()

    constructor(
    ) {
        const currentDisplay = new CurrentConditionsDisplay(this.weatherData)
        const statisticsDisplay = new StatisticsDisplay(this.weatherData)
    }

    public set measurements(measurements: Measurements) {
        this.weatherData.measurements = measurements
    }
}