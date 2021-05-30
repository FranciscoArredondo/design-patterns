import DecoyDuck from "./01 Strategy Pattern/DecoyDuck";
import MallardDuck from "./01 Strategy Pattern/MallardDuck";
import RedheadDuck from "./01 Strategy Pattern/RedheadDuck";
import RubberDuck from "./01 Strategy Pattern/RubberDuck";
import CurrentConditionsDisplay from "./02 Observer Pattern/displays/CurrentConditionsDisplay";
import ForecastDisplay from "./02 Observer Pattern/displays/ForecastDisplay";
import StatisticsDisplay from "./02 Observer Pattern/displays/StatisticsDisplay";
import WeatherData from "./02 Observer Pattern/WeatherData";

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
