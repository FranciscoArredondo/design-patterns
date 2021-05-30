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
import Espresso from "./03 Decorator Pattern/Espresso";
import HouseBlend from "./03 Decorator Pattern/HouseBlend";

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
const espresso = new Espresso();
const decaf = new Decaf();
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
