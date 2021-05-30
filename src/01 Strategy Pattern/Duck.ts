import IQuackBehavior from "./interfaces/IQuackBehavior";
import IFlyBehavior from "./interfaces/IFlyBehavior";

abstract class Duck {
  private flyBehavior: IFlyBehavior;
  private quackBehavior: IQuackBehavior;

  constructor(flyBehavior: IFlyBehavior, quackBehavior: IQuackBehavior) {
    console.log(
      `\nCreating a new instance of a ${(<any>this).constructor.name}! 🦆`
    );
    console.log(`-------------------------------------------`);
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  public performQuack() {
    this.quackBehavior.quack();
  }

  public performFly() {
    this.flyBehavior.fly();
  }

  public swim(): void {
    console.log(`Swimming! 🌊`);
  }

  abstract display(): void;
}

export default Duck;
