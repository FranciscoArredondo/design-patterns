import Duck from "./Duck";

export default class MallardDuck implements Duck {
  quack(): void {
    console.log(`Quaack!`);
  }
  fly(): void {
    console.log(`I'm Flying!`);
  }
}
