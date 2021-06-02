import { Veggies } from "../../Types";
import Cheese from "../Cheese/Cheese";
import Clams from "../Clams/Clams";
import Dough from "../Dough/Dough";
import Pepperoni from "../Pepperoni";
import Sauce from "../Sauce/Sauce";

export default abstract class IngredientFactory {
  abstract createDough(): Dough;
  abstract createClams(): Clams;
  abstract createPepperoni(): Pepperoni;
  abstract createCheese(): Cheese;
  abstract createVeggies(): Array<Veggies>;
  abstract createSauce(): Sauce;
}
