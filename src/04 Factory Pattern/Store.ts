import CheesePizza from "./CheesePizza";
import Pizza from "./Pizza";
import PlainPizza from "./PlainPizza";

export default class Store {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  orderPizza(type: string): Pizza {
    let pizza: Pizza;

    //decide what concrete type of pizza instance we need
    if (type === "Cheese") pizza = new CheesePizza();
    else pizza = new PlainPizza();

    // prepare, bake, cut, and box
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
