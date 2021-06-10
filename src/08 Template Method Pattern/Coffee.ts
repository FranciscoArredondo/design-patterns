import CaffineBeverage from "./CaffineBeverage";

export default class Coffee extends CaffineBeverage {
  brew(): void {
    console.log(`Dripping Coffee through filter`);
  }

  addCondiments(): void {
    console.log(`Adding Sugar and Milk`);
  }
}
