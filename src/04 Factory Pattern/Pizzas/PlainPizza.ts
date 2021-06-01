import Pizza from "./Pizza";
import { PizzaTypes } from "../Types";

export default class PlainPizza extends Pizza {
  protected readonly type: PizzaTypes;

  constructor() {
    super();
    this.type = PizzaTypes.Plain;
  }
}
