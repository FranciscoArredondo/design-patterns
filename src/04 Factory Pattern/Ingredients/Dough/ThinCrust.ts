import { DoughTypes } from "../../Types";
import Dough from "./Dough";

export default class ThinCrust extends Dough {
  protected type: DoughTypes;

  constructor() {
    super();
    this.type = DoughTypes["Thin Crust"];
  }
}
