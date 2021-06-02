import Pizza from "../Pizzas/Pizza";
import { PizzaTypes } from "../Types";

export default abstract class Store {
  orderPizza(type: PizzaTypes): Pizza {
    let pizza = this.createPizza(type);

    // prepare, bake, cut, and box
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  protected abstract createPizza(type: PizzaTypes): Pizza;
}
