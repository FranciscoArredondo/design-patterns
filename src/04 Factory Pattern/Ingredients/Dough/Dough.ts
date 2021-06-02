import { DoughTypes } from "../../Types";

export default abstract class Dough {
  protected abstract type: DoughTypes;

  getDescription(): string {
    return `${DoughTypes[this.type]}`;
  }
}
