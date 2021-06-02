import { CheeseTypes } from "../../Types";
import Cheese from "./Cheese";

export default class ProvoloneCheese extends Cheese {
  protected type: CheeseTypes;
  constructor() {
    super();
    this.type = CheeseTypes.Provolone;
  }
}
