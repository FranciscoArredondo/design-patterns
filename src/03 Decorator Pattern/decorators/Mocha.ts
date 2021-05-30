import Beverage from "../Beverage";
import CondimentDecorator from "./CondimentDecorator";

export default class Mocha extends CondimentDecorator {
  private readonly price = 0.2;

  constructor(beverage: Beverage) {
    super(beverage);
  }

  getDescription(): string {
    return this.beverage.getDescription() + " w/ Mocha";
  }

  cost(): number {
    return this.price + this.beverage.cost();
  }
}
