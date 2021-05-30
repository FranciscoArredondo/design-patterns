import Duck from "./Duck";
class MallardDuck extends Duck {
  constructor() {
    super();
  }

  display(): void {
    console.log("Displaying as a mallard duck!");
  }
}

export default MallardDuck;
