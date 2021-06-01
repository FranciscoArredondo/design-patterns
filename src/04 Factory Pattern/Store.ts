import CheesePizza from "./Pizzas/CheesePizza";
import ClamPizza from "./Pizzas/ClamPizza";
import GreekPizza from "./Pizzas/GreekPizza";
import PepperoniPizza from "./Pizzas/PepperoniPizza";
import Pizza from "./Pizzas/Pizza";
import PlainPizza from "./Pizzas/PlainPizza";
import VeggiePizza from "./Pizzas/VeggiePizza";
import { PizzaTypes } from "./Types";

export default class Store {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  orderPizza(type: PizzaTypes): Pizza {
    let pizza: Pizza;

    //decide what concrete type of pizza instance we need
    switch (type) {
      case PizzaTypes.Cheese:
        pizza = new CheesePizza();
        break;
      case PizzaTypes.Pepperoni:
        pizza = new PepperoniPizza();
        break;
      case PizzaTypes.Greek:
        pizza = new GreekPizza();
        break;
      case PizzaTypes.Clam:
        pizza = new ClamPizza();
        break;
      case PizzaTypes.Veggie:
        pizza = new VeggiePizza();
        break;
      case PizzaTypes.Plain:
        pizza = new PlainPizza();
        break;
      default:
        console.log(
          `\nWoah... I don't know how to make a ${
            PizzaTypes[type]
          } pizza is yet, how about a ${PizzaTypes[PizzaTypes.Plain]}`
        );
        pizza = new PlainPizza();
        break;
    }

    // prepare, bake, cut, and box
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
