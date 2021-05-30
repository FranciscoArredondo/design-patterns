import Duck from "./Duck";

class DecoyDuck extends Duck {
  constructor() {
    super();
  }

  display(): void {
    console.log("Displaying as a wooden duck.");
  }
}

export default DecoyDuck;
