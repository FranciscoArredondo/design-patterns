import Pizza from "./Pizza";

export default class CheesePizza extends Pizza {
  protected type: string;
  constructor() {
    super();
    this.type = "Cheese";
  }
}
