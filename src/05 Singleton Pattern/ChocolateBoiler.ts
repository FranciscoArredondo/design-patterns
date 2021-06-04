export default class ChocolateBoiler {
  private static uniqueInstance: ChocolateBoiler;
  private empty: boolean;
  private boiled: boolean;

  private constructor() {
    this.empty = true;
    this.boiled = false;
  }

  public static getInstance(): ChocolateBoiler {
    if (ChocolateBoiler.uniqueInstance === undefined) {
      ChocolateBoiler.uniqueInstance = new ChocolateBoiler();
    }
    return ChocolateBoiler.uniqueInstance;
  }

  fill(): void {
    if (this.empty) {
      this.empty = false;
      this.boiled = false;
    }
  }

  drain(): void {
    if (!this.empty) {
      this.empty = true;
      this.boiled = false;
    }
  }

  boil(): void {
    if (!this.empty && !this.boiled) {
      this.boiled = true;
      this.empty = false;
    }
  }

  isEmpty(): boolean {
    return this.empty;
  }

  isBoiled(): boolean {
    return this.boiled;
  }

  log(): void {
    console.log({ empty: this.empty, boiled: this.boiled });
  }
}
