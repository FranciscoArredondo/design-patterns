import { SauceTypes } from "../../Types";
import Sauce from "./Sauce";

export default class MarinaraSauce extends Sauce {
  protected type: SauceTypes;

  constructor() {
    super();
    this.type = SauceTypes.Marinara;
  }
}
