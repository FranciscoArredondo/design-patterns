import Pizza from "./Pizza";

export default class PlainPizza extends Pizza {
  protected readonly type: string;

  constructor() {
    super();
    this.type = "Plain";
  }
}
