import Duck from "./Duck";

class RubberDuck extends Duck {
  constructor() {
    super();
  }

  // Overriding the quack method to squeak since its a rubber duck.
  quack() {
    console.log(`squeeeeeeeeak!`);
  }

  // oops... rubber ducks aren't supposed to fly.
  fly() {
    // do nothing.
  }

  display(): void {
    console.log(`Displaying as a rubber ducky!`);
  }
}

export default RubberDuck;
