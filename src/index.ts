import DecoyDuck from "./01 Strategy Pattern/DecoyDuck";
import MallardDuck from "./01 Strategy Pattern/MallardDuck";
import RedheadDuck from "./01 Strategy Pattern/RedheadDuck";
import RubberDuck from "./01 Strategy Pattern/RubberDuck";
import CurrentConditionsDisplay from "./02 Observer Pattern/displays/CurrentConditionsDisplay";
import ForecastDisplay from "./02 Observer Pattern/displays/ForecastDisplay";
import StatisticsDisplay from "./02 Observer Pattern/displays/StatisticsDisplay";
import WeatherData from "./02 Observer Pattern/WeatherData";
import DarkRoast from "./03 Decorator Pattern/DarkRoast";
import Decaf from "./03 Decorator Pattern/Decaf";
import Milk from "./03 Decorator Pattern/decorators/Milk";
import Mocha from "./03 Decorator Pattern/decorators/Mocha";
import Soy from "./03 Decorator Pattern/decorators/Soy";
import Whip from "./03 Decorator Pattern/decorators/Whip";
import { Sizes } from "./03 Decorator Pattern/Enums";
import Espresso from "./03 Decorator Pattern/Espresso";
import HouseBlend from "./03 Decorator Pattern/HouseBlend";
import CheesePizza from "./04 Factory Pattern/Pizzas/CheesePizza";
import Pizza from "./04 Factory Pattern/Pizzas/Pizza";
import Store from "./04 Factory Pattern/Store";
import { PizzaTypes } from "./04 Factory Pattern/Types";

console.log("/******* Strategy Pattern *******/");
const md = new MallardDuck();
md.display();
md.performQuack();
md.swim();
md.performFly();

const rd = new RedheadDuck();
rd.display();
rd.performQuack();
rd.swim();
rd.performFly();

const rubberDuck = new RubberDuck();
rubberDuck.display();
rubberDuck.performQuack();
rubberDuck.swim();
rubberDuck.performFly();

const dd = new DecoyDuck();
dd.display();
dd.performQuack();
dd.swim();
dd.performFly();

console.log("\n/******* Observer Pattern *******/");
const wd = new WeatherData();
const currentConditionsDisplay = new CurrentConditionsDisplay(wd);
const statisticsDisplay = new StatisticsDisplay(wd);
const forecastDisplay = new ForecastDisplay(wd);

wd.measurmentsChanged();
currentConditionsDisplay.unsubscribe();
wd.measurmentsChanged();
statisticsDisplay.unsubscribe();
wd.measurmentsChanged();

console.log("\n/******* Decorator Pattern *******/");
const houseBlend = new HouseBlend();
houseBlend.setSize(Sizes.Small);

const espresso = new Espresso();
espresso.setSize(Sizes.Medium);

const decaf = new Decaf();
decaf.setSize(Sizes.Large);

const darkRoast = new DarkRoast();

// a house blend coffee with milk, mocha, soy, and whip. The works!
const houseBlendDrink = new Whip(new Soy(new Mocha(new Milk(houseBlend))));
houseBlendDrink.log();

// an espresso with mocha
const espressoDrink = new Mocha(espresso);
espressoDrink.log();

// a decaf coffee with whip and soy
const decafDrink = new Soy(new Whip(decaf));
decafDrink.log();

// a plain dark roast coffee
darkRoast.log();

console.log("\n/******* Factory Pattern *******/");
const pizzaStore = new Store("Frank's Pizza");
pizzaStore.orderPizza(PizzaTypes.Cheese);
pizzaStore.orderPizza(PizzaTypes.Pepperoni);
pizzaStore.orderPizza(PizzaTypes.Greek);
pizzaStore.orderPizza(PizzaTypes.Plain);
pizzaStore.orderPizza(PizzaTypes.Veggie);
pizzaStore.orderPizza(PizzaTypes.Clam);
