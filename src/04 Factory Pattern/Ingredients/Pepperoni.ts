export default class Pepperoni {
  protected type: string;

  constructor() {
    this.type = "Pepperoni";
  }
  getDescription(): string {
    return `${this.type}`;
  }
}
