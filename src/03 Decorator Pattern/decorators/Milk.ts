import Beverage from "../Beverage";
import CondimentDecorator from "./CondimentDecorator";

export default class Milk extends CondimentDecorator {
  private readonly price: number = 0.1;

  constructor(beverage: Beverage) {
    super(beverage);
  }

  getDescription(): string {
    return this.beverage.getDescription() + " w/ Milk";
  }

  cost(): number {
    return this.price + this.beverage.cost();
  }
}
