import CheesePizza from "../Pizzas/CheesePizza";
import ClamPizza from "../Pizzas/ClamPizza";
import GreekPizza from "../Pizzas/GreekPizza";
import PepperoniPizza from "../Pizzas/PepperoniPizza";
import Pizza from "../Pizzas/Pizza";
import PlainPizza from "../Pizzas/PlainPizza";
import VeggiePizza from "../Pizzas/VeggiePizza";
import Store from "./Store";
import { PizzaStyles, PizzaTypes } from "../Types";

export default class NYStore extends Store {
  private readonly style: PizzaStyles = PizzaStyles["New York"];

  protected createPizza(type: PizzaTypes): Pizza {
    switch (type) {
      case PizzaTypes.Cheese:
        return new CheesePizza(this.style);
      case PizzaTypes.Pepperoni:
        return new PepperoniPizza(this.style);
      case PizzaTypes.Greek:
        return new GreekPizza(this.style);
      case PizzaTypes.Clam:
        return new ClamPizza(this.style);
      case PizzaTypes.Veggie:
        return new VeggiePizza(this.style);
      case PizzaTypes.Plain:
        return new PlainPizza(this.style);
      default:
        console.log(
          `\nWoah... I don't know how to make a ${
            PizzaTypes[type]
          } pizza is yet, how about a ${PizzaTypes[PizzaTypes.Plain]}`
        );
    }

    return new PlainPizza(this.style);
  }
}
