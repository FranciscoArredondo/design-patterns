import { ClamTypes } from "../../Types";

export default abstract class Clams {
  protected abstract type: ClamTypes;

  getDescription() {
    return `${ClamTypes[this.type]} Clams`;
  }
}
