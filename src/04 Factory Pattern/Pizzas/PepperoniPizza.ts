import Pizza from "./Pizza";
import { PizzaTypes } from "./Types";

export default class PepperoniPizza extends Pizza {
  protected type: PizzaTypes;

  constructor() {
    super();
    this.type = PizzaTypes.Pepperoni;
  }
}
