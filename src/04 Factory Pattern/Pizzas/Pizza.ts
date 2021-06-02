import { PizzaStyles, PizzaTypes } from "../Types";

export default abstract class Pizza {
  protected abstract type: PizzaTypes;
  protected style?: PizzaStyles;

  constructor(style?: PizzaStyles) {
    if (style !== undefined) this.style = style;
  }

  prepare(): void {
    console.log(`\nPreparing a ${this.getDescription()}...`);
  }
  bake(): void {
    console.log(`Baking a ${this.getDescription()}...`);
  }
  cut(): void {
    console.log(`Slicing up a ${this.getDescription()}...`);
  }
  box(): void {
    console.log(`Boxing up a ${this.getDescription()}...`);
  }

  getDescription(): string {
    return `${
      this.style !== undefined ? PizzaStyles[this.style] + " style" : ""
    } ${PizzaTypes[this.type]} pizza`;
  }
}
