import CaffineBeverage from "./CaffineBeverage";

export default class Coffee extends CaffineBeverage {
  prepareRecipe() {
    this.boilWater();
    this.brewCoffeeGrinds();
    this.pourInCup();
    this.addSugarAndMilk();
  }

  brewCoffeeGrinds(): void {
    console.log(`Dripping Coffee through filter`);
  }

  addSugarAndMilk(): void {
    console.log(`Adding Sugar and Milk`);
  }
}
