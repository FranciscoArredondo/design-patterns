import Beverage from "../Beverage";
import CondimentDecorator from "./CondimentDecorator";

export default class Soy extends CondimentDecorator {
  private readonly price: number = 0.15;

  constructor(beverage: Beverage) {
    super(beverage);
  }

  getDescription(): string {
    return this.beverage.getDescription() + " w/ Soy";
  }

  cost() {
    return this.price + this.beverage.cost();
  }
}
