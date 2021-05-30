import FlyWithWings from "./behaviors/FlyWithWings";
import Quack from "./behaviors/Quack";
import Duck from "./Duck";

class RedheadDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  display(): void {
    console.log(`Displaying as a Redhead duck!`);
  }
}

export default RedheadDuck;
