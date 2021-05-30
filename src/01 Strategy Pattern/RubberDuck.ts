import Duck from "./Duck";

class RubberDuck extends Duck {
  constructor() {
    super();
  }

  // Overriding the quack method to squeak since its a rubber duck.
  quack() {
    console.log(`squeeeeeeeeak!`);
  }

  display(): void {
    console.log(`Displaying as a rubber ducky!`);
  }
}

export default RubberDuck;
