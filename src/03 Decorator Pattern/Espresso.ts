import Beverage from "./Beverage";

export default class Espresso extends Beverage {
  private readonly price = 1.99;

  constructor() {
    super();
  }

  getDescription(): string {
    return "Espresso";
  }

  cost(): number {
    return this.price + super.cost();
  }
}
