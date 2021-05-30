import IQuackBehavior from "../interfaces/IQuackBehavior";

export default class MuteQuack implements IQuackBehavior {
  quack(): void {
    console.log("Cannot quack! 🔇");
  }
}
