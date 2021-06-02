import { CheeseTypes } from "../../Types";

export default abstract class Cheese {
  protected abstract type: CheeseTypes;
  getDescription(): string {
    return `${CheeseTypes[this.type]} Cheese`;
  }
}
