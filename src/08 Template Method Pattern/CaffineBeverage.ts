export default abstract class CaffineBeverage {
  abstract prepareRecipe(): void;

  boilWater(): void {
    console.log(`Boiling water`);
  }
  pourInCup(): void {
    console.log(`Pouring into cup`);
  }
}
