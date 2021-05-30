import Duck from "./Duck";

class RedheadDuck extends Duck {
  constructor() {
    super();
  }
  display(): void {
    console.log(`Displaying as a Redhead duck!`);
  }
}

export default RedheadDuck;
