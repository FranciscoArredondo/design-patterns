import { DoughTypes } from "../../Types";
import Dough from "./Dough";

export default class ThicCrust extends Dough {
  protected type: DoughTypes;

  constructor() {
    super();
    this.type = DoughTypes["Thic Crust"];
  }
}
