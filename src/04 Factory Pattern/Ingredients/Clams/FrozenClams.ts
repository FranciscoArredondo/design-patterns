import { ClamTypes } from "../../Types";
import Clams from "./Clams";

export default class FrozenClams extends Clams {
  protected type: ClamTypes;

  constructor() {
    super();
    this.type = ClamTypes["Previously Frozen"];
  }
}
