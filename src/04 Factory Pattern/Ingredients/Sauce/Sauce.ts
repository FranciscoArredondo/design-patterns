import { SauceTypes } from "../../Types";

export default abstract class Sauce {
  protected abstract type: SauceTypes;

  getDescription() {
    return `${SauceTypes[this.type]} Sauce`;
  }
}
