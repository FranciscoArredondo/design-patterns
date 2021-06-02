import Pizza from "./Pizza";
import { PizzaStyles, PizzaTypes } from "../Types";

export default class PlainPizza extends Pizza {
  protected readonly type: PizzaTypes;

  constructor(style?: PizzaStyles) {
    super(style);
    this.type = PizzaTypes.Plain;
  }
}
