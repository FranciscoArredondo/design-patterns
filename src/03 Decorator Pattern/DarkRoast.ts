import Beverage from "./Beverage";

export default class DarkRoast extends Beverage {
  constructor(description: string) {
    super(description);
  }

  cost(): number {
    const price = parseFloat((Math.random() * 10).toString().slice(0, 4));
    console.log(`${(<any>this).constructor.name}'s price is $${price}`);
    return price;
  }
}
