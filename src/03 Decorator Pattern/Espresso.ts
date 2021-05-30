import Beverage from "./Beverage";

export default class Espresso extends Beverage {
  constructor(description: string) {
    super(description);
  }

  cost(): string {
    const price = (Math.random() * 10).toString().slice(0, 4);
    console.log(`${(<any>this).constructor.name}'s price is $${price}`);
    return price;
  }
}
