import IFlyBehavior from "../interfaces/IFlyBehavior";

export default class FlyNoWay implements IFlyBehavior {
  fly(): void {
    console.log("Cannot fly! 🙅🏽‍♀️");
  }
}
