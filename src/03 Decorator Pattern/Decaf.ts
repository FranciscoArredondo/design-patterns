import Beverage from "./Beverage";

export default class Decaf extends Beverage {
  private readonly price = 1.05;

  constructor() {
    super();
  }

  getDescription(): string {
    return "Decaf";
  }

  cost(): number {
    return this.price + super.cost();
  }
}
