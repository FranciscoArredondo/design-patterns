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
import CaliforniaStore from "./04 Factory Pattern/Stores/CaliforniaStore";
import ChicagoStore from "./04 Factory Pattern/Stores/ChicagoStore";
import NYStore from "./04 Factory Pattern/Stores/NYStore";
import { PizzaTypes } from "./04 Factory Pattern/Types";
import ChocolateBoiler from "./05 Singleton Pattern/ChocolateBoiler";
import Light from "./06 Command Pattern/Vendors/Light";
import LightOnCommand from "./06 Command Pattern/Commands/Light/LightOnCommand";
import SimpleRemote from "./06 Command Pattern/SimpleRemote";
import LightOffCommand from "./06 Command Pattern/Commands/Light/LightOffCommand";
import GarageDoor from "./06 Command Pattern/Vendors/GarageDoor";
import GarageDoorUpCommand from "./06 Command Pattern/Commands/GarageDoor/GarageDoorUpCommand";

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
const chitown = new ChicagoStore();
chitown.orderPizza(PizzaTypes.Pepperoni);

const newYork = new NYStore();
newYork.orderPizza(PizzaTypes.Cheese);
newYork.orderPizza(PizzaTypes.Pepperoni);

const cali = new CaliforniaStore();
cali.orderPizza(PizzaTypes.Clam);
cali.orderPizza(PizzaTypes.Veggie);

console.log("\n/******* Singleton Pattern *******/");
const chocBoiler = ChocolateBoiler.getInstance();
chocBoiler.log();
chocBoiler.fill();
chocBoiler.log();
chocBoiler.boil();
chocBoiler.log();
chocBoiler.drain();
chocBoiler.log();

console.log("\n/******* Command Pattern *******/");
const simpleRemote = new SimpleRemote();
const light = new Light();
const lightOnCommand = new LightOnCommand(light);

// testing the light on command.
simpleRemote.setCommand(lightOnCommand);
light.log();
simpleRemote.buttonWasPressed();
light.log();

// testing the light off command.
const lightOffCommand = new LightOffCommand(light);
simpleRemote.setCommand(lightOffCommand);
simpleRemote.buttonWasPressed();
light.log();

console.log(`\n~~~~~~~ Garage Door ~~~~~~~`);
const garageDoor = new GarageDoor();
garageDoor.log();
const gDoorUp = new GarageDoorUpCommand(garageDoor);
simpleRemote.setCommand(gDoorUp);
simpleRemote.buttonWasPressed();
garageDoor.log();
