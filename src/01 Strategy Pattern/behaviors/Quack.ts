import IQuackBehavior from "../interfaces/IQuackBehavior";

export default class Quack implements IQuackBehavior {
  quack(): void {
    console.log("QUAAAAAAACK!! 📣");
  }
}
