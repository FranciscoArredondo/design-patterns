import { PizzaTypes } from "../Types";

export default abstract class Pizza {
  protected abstract type: PizzaTypes;
  prepare(): void {
    console.log(`\nPreparing a ${PizzaTypes[this.type]} pizza...`);
  }
  bake(): void {
    console.log(`Baking a ${PizzaTypes[this.type]} pizza...`);
  }
  cut(): void {
    console.log(`Slicing up a ${PizzaTypes[this.type]} pizza...`);
  }
  box(): void {
    console.log(`Boxing up a ${PizzaTypes[this.type]} pizza...`);
  }
}
