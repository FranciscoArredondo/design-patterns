export default abstract class Beverage {
  private description: string = "Beverage";
  private readonly basePrice = 0.99;

  abstract getDescription(): string;

  cost(): number {
    return this.basePrice;
  }

  log(): void {
    console.log(`${this.getDescription()} will cost $${this.cost()}`);
  }
}
