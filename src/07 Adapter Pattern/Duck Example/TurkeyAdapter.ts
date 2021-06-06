import Duck from "./Duck";
import Turkey from "./Turkey";

export default class TurkeyAdapter implements Duck {
  private turkey: Turkey;

  constructor(turkey: Turkey) {
    this.turkey = turkey;
  }

  quack(): void {
    this.turkey.gobble();
  }

  fly(): void {
    let attempts = 5;
    do {
      this.turkey.fly();
      attempts -= 1;
    } while (attempts > 0);
  }
}
