import DisplayElement from "../interfaces/DisplayElement";
import Observer from "../interfaces/Observer";
import Subject from "../interfaces/Subject";
import { WeatherDataType } from "../interfaces/Types";

export default class ForecastDisplay implements Observer, DisplayElement {
  private temperature: string = "";
  private pressure: string = "";
  private humidity: string = "";
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  display(): void {
    console.log(`Forecast Display...\n\
Temperature: ${this.temperature}, Humidity: ${this.humidity}, Pressue: ${this.pressure}\n`);
  }

  update(data: WeatherDataType): void {
    this.temperature = data.temperature;
    this.humidity = data.humidity;
    this.pressure = data.pressure;
    this.display();
  }
}
