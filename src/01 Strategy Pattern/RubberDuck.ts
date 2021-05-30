import Duck from "./Duck";
import IQuackable from "./interfaces/IQuackable";

class RubberDuck extends Duck implements IQuackable {
  constructor() {
    super();
  }

  // Overriding the quack method to squeak since its a rubber duck.
  quack() {
    console.log(`squeeeeeeeeak! 🔉`);
  }

  display(): void {
    console.log(`Displaying as a rubber ducky!`);
  }
}

export default RubberDuck;
