import Beverage from "./Beverage";

export default class DarkRoast extends Beverage {
  constructor(description: string) {
    super(description);
  }

  cost(): number {
    const price = super.cost();
    console.log(`${(<any>this).constructor.name}'s price is $${price}`);
    return price;
  }
}
