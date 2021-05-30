export default abstract class Beverage {
  private description: string;

  constructor(description: string) {
    this.description = description;
  }

  getDescription(): string {
    return this.description;
  }

  abstract cost(): string;
}
