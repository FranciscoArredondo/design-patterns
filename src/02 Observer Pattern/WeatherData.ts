class WeatherData {
  getTemperature(): string {
    const rand = Math.random() * 100;
    return `${rand.toString().slice(0, 5)}F`;
  }

  getHumidity(): string {
    const rand = Math.random() * 100;
    return `${rand.toString().slice(0, 5)}%`;
  }

  getPressure(): string {
    const rand = Math.random() * 100;
    return `${rand.toString().slice(0, 5)}inHG`;
  }

  public measurmentsChanged(): void {
    // your code goes here
  }
}

export default WeatherData;
