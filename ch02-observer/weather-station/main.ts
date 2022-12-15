import { Measurements, WeatherStation } from "."

const ws = new WeatherStation()
// [LOG]: "Registerd!" 

const m: Measurements = { temperature: 20, humidity: 10, pressure: 1 }
ws.measurements = m
// [LOG]: "new information..." 
// [LOG]: "Current conditions: temperature 20 degrees and humidity 10" 
// [LOG]: "Avg/Max/Min temperature 20/20/20" 

ws.measurements = { ...m, temperature: 40 }
// [LOG]: "new information..."
// [LOG]: "Current conditions: temperature 40 degrees and humidity 10" 
// [LOG]: "Avg/Max/Min temperature 30/40/20" 