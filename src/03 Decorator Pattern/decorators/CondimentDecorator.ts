import Beverage from "../Beverage";
import { Sizes } from "../Enums";

export default abstract class CondimentDecorator extends Beverage {
  protected beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
    this.size = this.beverage.getSize();
  }

  abstract getDescription(): string;
  abstract cost(): number;
}
