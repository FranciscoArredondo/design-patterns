import Cheese from "../Ingredients/Cheese/Cheese";
import Clams from "../Ingredients/Clams/Clams";
import Dough from "../Ingredients/Dough/Dough";
import IngredientFactory from "../Ingredients/Factories/IngredientFactory";
import Pepperoni from "../Ingredients/Pepperoni";
import Sauce from "../Ingredients/Sauce/Sauce";
import { PizzaStyles, PizzaTypes, Veggies } from "../Types";

export default abstract class Pizza {
  protected ingredientFactory: IngredientFactory;
  protected abstract name: string;
  protected abstract dough?: Dough;
  protected abstract sauce?: Sauce;
  protected abstract clams?: Clams;
  protected abstract pepperoni?: Pepperoni;
  protected abstract cheese?: Cheese;
  protected abstract veggies?: Array<Veggies>;

  constructor(ingredientFactory: IngredientFactory) {
    this.ingredientFactory = ingredientFactory;
  }

  abstract prepare(): void;

  bake(): void {
    console.log(`Baking a ${this.getDescription()}...`);
  }
  cut(): void {
    console.log(`Slicing up a ${this.getDescription()}...`);
  }
  box(): void {
    console.log(`Boxing up a ${this.getDescription()}...`);
  }

  setName(name: string): void {
    this.name = name;
  }

  getDescription(): string {
    return `${this.name}`;
  }
}
