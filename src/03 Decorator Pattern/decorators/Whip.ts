import Beverage from "../Beverage";
import CondimentDecorator from "./CondimentDecorator";

export default class Whip extends CondimentDecorator {
  private readonly price: number = 0.1;

  constructor(beverage: Beverage) {
    super(beverage);
  }

  getDescription(): string {
    return this.beverage.getDescription() + " w/ Whip";
  }

  cost(): number {
    return this.price + this.beverage.cost();
  }
}
