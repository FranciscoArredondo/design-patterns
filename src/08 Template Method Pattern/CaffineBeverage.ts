export default abstract class CaffineBeverage {
  prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  boilWater(): void {
    console.log(`Boiling water`);
  }

  pourInCup(): void {
    console.log(`Pouring into cup`);
  }

  abstract brew(): void;
  abstract addCondiments(): void;
}
