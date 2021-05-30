import DecoyDuck from "./01 Strategy Pattern/DecoyDuck";
import MallardDuck from "./01 Strategy Pattern/MallardDuck";
import RedheadDuck from "./01 Strategy Pattern/RedheadDuck";
import RubberDuck from "./01 Strategy Pattern/RubberDuck";

console.log("/******* Strategy Pattern *******/");
const md = new MallardDuck();
md.display();
md.performQuack();
md.swim();
md.performFly();

const rd = new RedheadDuck();
rd.display();
rd.performQuack();
rd.swim();
rd.performFly();

const rubberDuck = new RubberDuck();
rubberDuck.display();
rubberDuck.performQuack();
rubberDuck.swim();
rubberDuck.performFly();

const dd = new DecoyDuck();
dd.display();
dd.performQuack();
dd.swim();
dd.performFly();
