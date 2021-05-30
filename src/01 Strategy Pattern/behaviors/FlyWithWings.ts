import IFlyBehavior from "../interfaces/IFlyBehavior";

export default class FlyWithWings implements IFlyBehavior {
  fly(): void {
    console.log("Flying with wings! 🦅");
  }
}
