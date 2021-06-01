import Pizza from "./Pizza";
import { PizzaTypes } from "../Types";

export default class VeggiePizza extends Pizza {
  protected type: PizzaTypes;

  constructor() {
    super();
    this.type = PizzaTypes.Veggie;
  }
}
