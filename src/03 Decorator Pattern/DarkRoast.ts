import Beverage from "./Beverage";
import { Sizes } from "./Enums";

export default class DarkRoast extends Beverage {
  private readonly smallPrice: number = 0.99;
  private readonly mediumPrice: number = this.smallPrice * 1.25;
  private readonly largePrice: number = this.mediumPrice * 1.25;

  constructor() {
    super();
  }

  getDescription() {
    return "DarkRoast";
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
    return currentPrice;
  }
}
