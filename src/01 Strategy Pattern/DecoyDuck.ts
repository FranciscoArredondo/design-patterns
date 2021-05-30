import FlyNoWay from "./behaviors/FlyNoWay";
import MuteQuack from "./behaviors/MuteQuack";
import Duck from "./Duck";

class DecoyDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new MuteQuack());
  }

  display(): void {
    console.log("Displaying as a wooden duck.");
  }
}

export default DecoyDuck;
