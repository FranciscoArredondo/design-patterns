export default abstract class CaffineBeverage {
  async prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (await this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }

  boilWater(): void {
    console.log(`Boiling water`);
  }

  pourInCup(): void {
    console.log(`Pouring into cup`);
  }

  async customerWantsCondiments(): Promise<boolean> {
    return true;
  }

  abstract brew(): void;
  abstract addCondiments(): void;
}
