import CheesePizza from "./CheesePizza";
import GreekPizza from "./GreekPizza";
import PepperoniPizza from "./PepperoniPizza";
import Pizza from "./Pizza";
import PlainPizza from "./PlainPizza";
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
      default:
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
