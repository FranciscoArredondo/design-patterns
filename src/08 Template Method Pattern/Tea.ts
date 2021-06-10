import CaffineBeverage from "./CaffineBeverage";

export default class Tea extends CaffineBeverage {
  brew(): void {
    console.log(`Steeping the tea`);
  }

  addCondiments(): void {
    console.log(`Adding Lemon`);
  }
}
