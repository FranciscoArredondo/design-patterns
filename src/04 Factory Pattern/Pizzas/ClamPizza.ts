import Pizza from "./Pizza";
import { PizzaTypes } from "../Types";

export default class ClamPizza extends Pizza {
  protected type: PizzaTypes;

  constructor() {
    super();
    this.type = PizzaTypes.Clam;
  }
}
