import SimplePizzaFactory from "./Factories/SimplePizzaFactory";
import Pizza from "./Pizzas/Pizza";
import { PizzaTypes } from "./Types";

export default class Store {
  private pizzaFactory: SimplePizzaFactory;

  constructor(factory: SimplePizzaFactory) {
    this.pizzaFactory = factory;
  }

  orderPizza(type: PizzaTypes): Pizza {
    let pizza = this.pizzaFactory.createPizza(type);

    // prepare, bake, cut, and box
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
