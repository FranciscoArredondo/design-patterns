import DecoyDuck from "./01 Strategy Pattern/DecoyDuck";
import MallardDuck from "./01 Strategy Pattern/MallardDuck";
import RedheadDuck from "./01 Strategy Pattern/RedheadDuck";
import RubberDuck from "./01 Strategy Pattern/RubberDuck";

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

const rubberDuck = new RubberDuck();
rubberDuck.display();
rubberDuck.fly();
rubberDuck.quack();
rubberDuck.swim();

const dd = new DecoyDuck();
dd.display();
dd.fly();
dd.quack();
dd.swim();
