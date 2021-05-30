import Beverage from "./Beverage";

export default class DarkRoast extends Beverage {
  private readonly price = 0.99;

  constructor() {
    super();
  }

  getDescription() {
    return "DarkRoast";
  }

  cost(): number {
    return this.price + super.cost();
  }
}
