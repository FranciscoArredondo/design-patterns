import Cheese from "../Ingredients/Cheese/Cheese";
import Clams from "../Ingredients/Clams/Clams";
import Dough from "../Ingredients/Dough/Dough";
import IngredientFactory from "../Ingredients/Factories/IngredientFactory";
import Pepperoni from "../Ingredients/Pepperoni";
import Sauce from "../Ingredients/Sauce/Sauce";
import { PizzaTypes, Veggies } from "../Types";
import Pizza from "./Pizza";

export default class PlainPizza extends Pizza {
  protected name: string;
  protected dough?: Dough | undefined;
  protected sauce?: Sauce | undefined;
  protected clams?: Clams | undefined;
  protected pepperoni?: Pepperoni | undefined;
  protected cheese?: Cheese | undefined;
  protected veggies?: Array<Veggies> | undefined;

  constructor(ingredientFactory: IngredientFactory) {
    super(ingredientFactory);
    this.name = PizzaTypes[PizzaTypes.Plain];
  }

  prepare(): void {
    console.log(`\nPreparing ${this.getDescription()}`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
  }
}
