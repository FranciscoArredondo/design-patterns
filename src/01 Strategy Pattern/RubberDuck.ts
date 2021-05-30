import FlyNoWay from "./behaviors/FlyNoWay";
import Squeak from "./behaviors/Squeak";
import Duck from "./Duck";
import IFlyBehavior from "./interfaces/IFlyBehavior";
import IQuackBehavior from "./interfaces/IQuackBehavior";

class RubberDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Squeak());
  }

  display(): void {
    console.log(`Displaying as a rubber ducky!`);
  }
}

export default RubberDuck;
