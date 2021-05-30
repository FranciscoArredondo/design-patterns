export default class StatisticsDisplay {
  update(temp: string, humidity: string, pressure: string): void {
    console.log(`Statistics Display...\n\
Temperature: ${temp}, Humidity: ${humidity}, Pressue: ${pressure}\n`);
  }
}
