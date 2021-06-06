export default class TheaterLights {
  on(): void {
    console.log(`Theater lights are on!`);
  }

  off(): void {
    console.log(`Theater lights are off!`);
  }

  dim(level: number): void {
    console.log(`Dimming the theater lights to ${level}%!`);
  }
}
