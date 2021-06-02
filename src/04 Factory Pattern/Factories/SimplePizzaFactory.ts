import CheesePizza from "../Pizzas/CheesePizza";
import ClamPizza from "../Pizzas/ClamPizza";
import GreekPizza from "../Pizzas/GreekPizza";
import PepperoniPizza from "../Pizzas/PepperoniPizza";
import Pizza from "../Pizzas/Pizza";
import PlainPizza from "../Pizzas/PlainPizza";
import VeggiePizza from "../Pizzas/VeggiePizza";
import { PizzaTypes } from "../Types";

export default class SimplePizzaFactory {
  createPizza(type: PizzaTypes): Pizza {
    switch (type) {
      case PizzaTypes.Cheese:
        return new CheesePizza();
      case PizzaTypes.Pepperoni:
        return new PepperoniPizza();
      case PizzaTypes.Greek:
        return new GreekPizza();
      case PizzaTypes.Clam:
        return new ClamPizza();
      case PizzaTypes.Veggie:
        return new VeggiePizza();
      case PizzaTypes.Plain:
        return new PlainPizza();
      default:
        console.log(
          `\nWoah... I don't know how to make a ${
            PizzaTypes[type]
          } pizza is yet, how about a ${PizzaTypes[PizzaTypes.Plain]}`
        );
        return new PlainPizza();
    }
  }
}
