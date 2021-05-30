import Duck from "./Duck";
import IFlyable from "./interfaces/IFlyable";
import IQuackable from "./interfaces/IQuackable";

class RedheadDuck extends Duck implements IFlyable, IQuackable {
  constructor() {
    super();
  }

  quack(): void {
    console.log("Quackkk! 📣");
  }

  fly(): void {
    console.log("Flying! ✈️");
  }

  display(): void {
    console.log(`Displaying as a Redhead duck!`);
  }
}

export default RedheadDuck;
