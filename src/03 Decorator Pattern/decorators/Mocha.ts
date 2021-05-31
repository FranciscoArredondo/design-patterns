import Beverage from "../Beverage";
import { Sizes } from "../Enums";
import CondimentDecorator from "./CondimentDecorator";

export default class Mocha extends CondimentDecorator {
  private readonly price = 0.2;
  private readonly smallPrice: number = 0.2;
  private readonly mediumPrice: number = this.smallPrice * 2;
  private readonly largePrice: number = this.mediumPrice * 2;

  constructor(beverage: Beverage) {
    super(beverage);
  }

  getDescription(): string {
    return this.beverage.getDescription() + " w/ Mocha";
  }

  cost(): number {
    let currentPrice;
    switch (this.getSize()) {
      case Sizes.Small:
        currentPrice = this.smallPrice;
        break;
      case Sizes.Medium:
        currentPrice = this.mediumPrice;
        break;
      case Sizes.Large:
        currentPrice = this.largePrice;
        break;
      default:
        currentPrice = this.smallPrice;
        break;
    }
    return currentPrice + this.beverage.cost();
  }
}
