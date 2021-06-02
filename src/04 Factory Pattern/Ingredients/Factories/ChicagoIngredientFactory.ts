import { Veggies } from "../../Types";
import CheddarCheese from "../Cheese/CheddarCheese";
import Cheese from "../Cheese/Cheese";
import Clams from "../Clams/Clams";
import FrozenClams from "../Clams/FrozenClams";
import Dough from "../Dough/Dough";
import ThicCrust from "../Dough/ThicCrust";
import Pepperoni from "../Pepperoni";
import PlumTomatoSauce from "../Sauce/PlumTomatoSauce";
import Sauce from "../Sauce/Sauce";
import IngredientFactory from "./IngredientFactory";

export default class ChicagoIngredientFactory extends IngredientFactory {
  createDough(): Dough {
    return new ThicCrust();
  }
  createClams(): Clams {
    return new FrozenClams();
  }
  createPepperoni(): Pepperoni {
    return new Pepperoni();
  }
  createCheese(): Cheese {
    return new CheddarCheese();
  }
  createVeggies(): Veggies[] {
    return [Veggies.Mushroom];
  }
  createSauce(): Sauce {
    return new PlumTomatoSauce();
  }
}
