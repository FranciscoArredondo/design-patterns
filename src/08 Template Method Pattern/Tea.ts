import CaffineBeverage from "./CaffineBeverage";

export default class Tea extends CaffineBeverage {
  prepareRecipe() {
    this.boilWater();
    this.steepTeaBag();
    this.pourInCup();
    this.addLemon();
  }

  steepTeaBag(): void {
    console.log(`Steeping the tea`);
  }

  addLemon(): void {
    console.log(`Adding Lemon`);
  }
}
