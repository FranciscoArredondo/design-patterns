import CurrentConditionsDisplay from "./displays/CurrentConditionsDisplay";
import ForecastDisplay from "./displays/ForecastDisplay";
import StatisticsDisplay from "./displays/StatisticsDisplay";

class WeatherData {
  currentConditionsDisplay: CurrentConditionsDisplay;
  statisticsDisplay: StatisticsDisplay;
  forecastDisplay: ForecastDisplay;

  constructor() {
    this.currentConditionsDisplay = new CurrentConditionsDisplay();
    this.statisticsDisplay = new StatisticsDisplay();
    this.forecastDisplay = new ForecastDisplay();
  }

  getTemperature(): string {
    const rand = Math.random() * 100;
    return `${rand.toString().slice(0, 5)} F`;
  }

  getHumidity(): string {
    const rand = Math.random() * 100;
    return `${rand.toString().slice(0, 5)} %`;
  }

  getPressure(): string {
    const rand = Math.random() * 100;
    return `${rand.toString().slice(0, 5)} inHG`;
  }

  public measurmentsChanged(): void {
    const temperature = this.getTemperature();
    const pressure = this.getPressure();
    const humidity = this.getHumidity();

    this.currentConditionsDisplay.update(temperature, humidity, pressure);
    this.statisticsDisplay.update(temperature, humidity, pressure);
    this.forecastDisplay.update(temperature, humidity, pressure);
  }
}

export default WeatherData;
