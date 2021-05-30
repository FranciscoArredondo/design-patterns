import FlyWithWings from "./behaviors/FlyWithWings";
import Quack from "./behaviors/Quack";
import Duck from "./Duck";

class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  display(): void {
    console.log("Displaying as a mallard duck!");
  }
}

export default MallardDuck;
