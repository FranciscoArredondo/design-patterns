import Duck from "./Duck";

class DecoyDuck extends Duck {
  constructor() {
    super();
  }

  // Decoy ducks can't fly
  fly() {
    // do nothing
  }

  // Decoy ducks can't quack either 😓
  quack() {
    // do nothing
  }

  display(): void {
    console.log("Displaying as a wooden duck.");
  }
}

export default DecoyDuck;
