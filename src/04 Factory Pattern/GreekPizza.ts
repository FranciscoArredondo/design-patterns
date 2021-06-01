import Pizza from "./Pizza";
import { PizzaTypes } from "./Types";

export default class GreekPizza extends Pizza {
  protected type: PizzaTypes;

  constructor() {
    super();
    this.type = PizzaTypes.Greek;
  }
}
