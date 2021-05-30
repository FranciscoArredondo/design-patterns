import Observer from "./interfaces/Observer";
import Subject from "./interfaces/Subject";
import { WeatherDataType } from "./interfaces/Types";

class WeatherData implements Subject {
  observers: Observer[];

  constructor() {
    this.observers = [];
  }

  registerObserver(obs: Observer): void {
    this.observers.push(obs);
  }

  removeObserver(obs: Observer): void {
    this.observers = this.observers.filter((o) => obs !== o);
  }

  notifyObservers(): void {
    this.observers.forEach((obs) => {
      obs.update(this.getWeatherData());
    });
  }

  private getTemperature(): string {
    const rand = Math.random() * 100;
    return `${rand.toString().slice(0, 5)} F`;
  }

  private getHumidity(): string {
    const rand = Math.random() * 100;
    return `${rand.toString().slice(0, 5)} %`;
  }

  private getPressure(): string {
    const rand = Math.random() * 100;
    return `${rand.toString().slice(0, 5)} inHG`;
  }

  private getWeatherData(): WeatherDataType {
    const temperature = this.getTemperature();
    const pressure = this.getPressure();
    const humidity = this.getHumidity();

    return { temperature, pressure, humidity };
  }

  public measurmentsChanged(): void {
    console.log("~~~~~~~New Mesurement~~~~~~~");

    this.notifyObservers();
  }
}

export default WeatherData;
