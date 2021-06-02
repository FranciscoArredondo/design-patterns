import { SauceTypes } from "../../Types";
import Sauce from "./Sauce";

export default class PlumTomatoSauce extends Sauce {
  protected type: SauceTypes;

  constructor() {
    super();
    this.type = SauceTypes["Plum Tomato"];
  }
}
