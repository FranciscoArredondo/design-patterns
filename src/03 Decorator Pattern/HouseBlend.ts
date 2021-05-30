import Beverage from "./Beverage";

export default class HouseBlend extends Beverage {
  private readonly price = 0.89;

  constructor() {
    super();
  }

  getDescription() {
    return "House Blend";
  }

  cost(): number {
    return this.price + super.cost();
  }
}
