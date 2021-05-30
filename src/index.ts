import MallardDuck from "./01 Strategy Pattern/MallardDuck";
import RedheadDuck from "./01 Strategy Pattern/RedheadDuck";

console.log("/******* Strategy Pattern *******/");
const md = new MallardDuck();
md.quack();
md.swim();
md.fly();
md.display();

const rd = new RedheadDuck();
rd.quack();
rd.swim();
rd.fly();
rd.display();
