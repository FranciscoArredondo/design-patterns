import DisplayElement from "../interfaces/DisplayElement";
import Observer from "../interfaces/Observer";
import Subject from "../interfaces/Subject";
import { WeatherDataType } from "../interfaces/Types";

export default class CurrentConditionsDisplay
  implements Observer, DisplayElement
{
  private temperature: string = "";
  private humidity: string = "";
  private pressure: string = "";
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  unsubscribe(): void {
    this.weatherData.removeObserver(this);
  }

  display(): void {
    console.log(`Current Condtions Display...\n\
Temperature: ${this.temperature}, Humidity: ${this.humidity}, Pressue: ${this.pressure}\n`);
  }

  update(data: WeatherDataType): void {
    this.temperature = data.temperature;
    this.humidity = data.humidity;
    this.pressure = data.pressure;
    this.display();
  }
}
