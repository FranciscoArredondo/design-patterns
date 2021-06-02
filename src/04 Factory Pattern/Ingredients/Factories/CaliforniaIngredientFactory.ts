import { Veggies } from "../../Types";
import Cheese from "../Cheese/Cheese";
import ProvoloneCheese from "../Cheese/ProvoloneCheese";
import Clams from "../Clams/Clams";
import FreshClams from "../Clams/FreshClams";
import Dough from "../Dough/Dough";
import ThinCrust from "../Dough/ThinCrust";
import Pepperoni from "../Pepperoni";
import MarinaraSauce from "../Sauce/MarinaraSauce";
import Sauce from "../Sauce/Sauce";
import IngredientFactory from "./IngredientFactory";

export default class CaliforniaIngredientFactory extends IngredientFactory {
  createDough(): Dough {
    return new ThinCrust();
  }
  createClams(): Clams {
    return new FreshClams();
  }
  createPepperoni(): Pepperoni {
    return new Pepperoni();
  }
  createCheese(): Cheese {
    return new ProvoloneCheese();
  }
  createVeggies(): Veggies[] {
    return [Veggies.Pineapple, Veggies.Mushroom, Veggies.Onion, Veggies.Garlic];
  }
  createSauce(): Sauce {
    return new MarinaraSauce();
  }
}
