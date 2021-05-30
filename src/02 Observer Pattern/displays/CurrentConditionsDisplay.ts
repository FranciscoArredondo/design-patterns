export default class CurrentConditionsDisplay {
  update(temp: string, humidity: string, pressure: string): void {
    console.log(`Current Condtions Display...\n\
Temperature: ${temp}, Humidity: ${humidity}, Pressue: ${pressure}\n`);
  }
}
