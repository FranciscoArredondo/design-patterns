export default class ForecastDisplay {
  update(temp: string, humidity: string, pressure: string): void {
    console.log(`Forecast Display...\n\
Temperature: ${temp}, Humidity: ${humidity}, Pressue: ${pressure}\n`);
  }
}
