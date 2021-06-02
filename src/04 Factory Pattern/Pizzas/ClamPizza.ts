import Pizza from "./Pizza";
import { PizzaStyles, PizzaTypes } from "../Types";

export default class ClamPizza extends Pizza {
  protected type: PizzaTypes;

  constructor(style?: PizzaStyles) {
    super(style);
    this.type = PizzaTypes.Clam;
  }
}
