export default abstract class Beverage {
  private description: string;
  // lets add support for the various condiments in the parent Beverage class
  private milk: boolean = false;
  private soy: boolean = false;
  private mocha: boolean = false;
  private whip: boolean = false;
  private readonly basePrice = 1.0;

  constructor(description: string) {
    this.description = description;
  }

  getDescription(): string {
    return this.description;
  }

  // add getters/setters for the condiments here
  hasMilk(): boolean {
    return this.milk;
  }

  setMilk(): void {
    this.milk = true;
  }

  hasSoy(): boolean {
    return this.soy;
  }

  setSoy(): void {
    this.soy = true;
  }

  hasMocha(): boolean {
    return this.mocha;
  }

  setMocha(): void {
    this.mocha = true;
  }

  hasWhip(): boolean {
    return this.whip;
  }

  setWhip(): void {
    this.whip = true;
  }

  cost(): number {
    let runningTotal: number = this.basePrice;

    if (this.milk) runningTotal += 0.75;
    if (this.mocha) runningTotal += 1.25;
    if (this.soy) runningTotal += 0.5;
    if (this.whip) runningTotal += 2.0;

    return runningTotal;
  }
}
