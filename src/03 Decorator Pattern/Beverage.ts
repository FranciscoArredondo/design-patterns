import { Sizes } from "./Enums";

export default abstract class Beverage {
  protected size: Sizes = Sizes.Small;

  abstract getDescription(): string;
  abstract cost(): number;

  setSize(size: Sizes): void {
    this.size = size;
  }

  getSize(): Sizes {
    return this.size;
  }

  log(): void {
    console.log(
      `${
        Sizes[this.getSize()]
      } ${this.getDescription()} will cost $${this.cost()}`
    );
  }
}
