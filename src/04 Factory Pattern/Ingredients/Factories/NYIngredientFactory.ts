import { Veggies } from "../../Types";
import Cheese from "../Cheese/Cheese";
import MozzarellaCheese from "../Cheese/MozzarellaCheese";
import Clams from "../Clams/Clams";
import FreshClams from "../Clams/FreshClams";
import Dough from "../Dough/Dough";
import ThicCrust from "../Dough/ThicCrust";
import IngredientFactory from "./IngredientFactory";
import Pepperoni from "../Pepperoni";
import MarinaraSauce from "../Sauce/MarinaraSauce";
import Sauce from "../Sauce/Sauce";

export default class NYIngredientFactory extends IngredientFactory {
  createDough(): Dough {
    return new ThicCrust();
  }
  createClams(): Clams {
    return new FreshClams();
  }
  createPepperoni(): Pepperoni {
    return new Pepperoni();
  }
  createCheese(): Cheese {
    return new MozzarellaCheese();
  }
  createVeggies(): Array<Veggies> {
    return [Veggies.Mushroom, Veggies.Olives];
  }
  createSauce(): Sauce {
    return new MarinaraSauce();
  }
}
