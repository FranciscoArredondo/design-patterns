import ChicagoIngredientFactory from "../Ingredients/Factories/ChicagoIngredientFactory";
import IngredientFactory from "../Ingredients/Factories/IngredientFactory";
import CheesePizza from "../Pizzas/CheesePizza";
import ClamPizza from "../Pizzas/ClamPizza";
import GreekPizza from "../Pizzas/GreekPizza";
import PepperoniPizza from "../Pizzas/PepperoniPizza";
import Pizza from "../Pizzas/Pizza";
import PlainPizza from "../Pizzas/PlainPizza";
import VeggiePizza from "../Pizzas/VeggiePizza";
import { PizzaTypes } from "../Types";
import Store from "./Store";

export default class ChicagoStore extends Store {
  private ingredientFactory: IngredientFactory;

  constructor() {
    super();
    this.ingredientFactory = new ChicagoIngredientFactory();
  }

  protected createPizza(type: PizzaTypes): Pizza {
    let pizza: Pizza;
    switch (type) {
      case PizzaTypes.Cheese:
        pizza = new CheesePizza(this.ingredientFactory);
        pizza.setName("Chicago Deep Dish Cheese Pizza");
        break;
      case PizzaTypes.Pepperoni:
        pizza = new PepperoniPizza(this.ingredientFactory);
        pizza.setName("Chicago Deep Dish Pepperoni Pizza");
        break;
      case PizzaTypes.Greek:
        pizza = new GreekPizza(this.ingredientFactory);
        pizza.setName("Chicago Deep Dish Greek Pizza");
        break;
      case PizzaTypes.Clam:
        pizza = new ClamPizza(this.ingredientFactory);
        pizza.setName("Chicago Deep Dish Clam Pizza");
        break;
      case PizzaTypes.Veggie:
        pizza = new VeggiePizza(this.ingredientFactory);
        pizza.setName("Chicago Deep Dish Veggie Lovers Pizza");
        break;
      case PizzaTypes.Plain:
        pizza = new PlainPizza(this.ingredientFactory);
        pizza.setName("Chicago Deep Dish Plain Pizza");
        break;
      default:
        console.log(
          `\nWoah... I don't know how to make a ${
            PizzaTypes[type]
          } pizza is yet, how about a ${PizzaTypes[PizzaTypes.Plain]}`
        );
        pizza = new PlainPizza(this.ingredientFactory);
        pizza.setName("Chicago Deep Dish Plain Pizza");
        break;
    }

    return pizza;
  }
}
