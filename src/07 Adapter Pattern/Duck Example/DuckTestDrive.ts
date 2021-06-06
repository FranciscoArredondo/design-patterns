import Duck from "./Duck";
import MallardDuck from "./MallardDuck";
import Turkey from "./Turkey";
import TurkeyAdapter from "./TurkeyAdapter";
import WildTurkey from "./WildTurkey";

export default class DuckTestDrive {
  static main(): void {
    const mallardDuck = new MallardDuck();
    const wildTurkey = new WildTurkey();
    const turkeyAdapter = new TurkeyAdapter(wildTurkey);

    this.testDuck(mallardDuck);
    this.testTurkey(wildTurkey);
    this.testDuck(turkeyAdapter);
  }

  private static testDuck(duck: Duck) {
    console.log(`\nTesting a Duck!`);
    duck.quack();
    duck.fly();
  }

  private static testTurkey(turkey: Turkey) {
    console.log(`\nTesting a Turkey!`);
    turkey.gobble();
    turkey.fly();
  }
}
