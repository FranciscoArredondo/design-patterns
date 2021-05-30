import IQuackBehavior from "../interfaces/IQuackBehavior";

export default class Squeak implements IQuackBehavior {
  quack(): void {
    console.log("Sqqqqqquueeeaaaakk! 🔊");
  }
}
