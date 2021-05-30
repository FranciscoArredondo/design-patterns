abstract class Duck {
  constructor() {
    console.log(
      `\nCreating a new instance of a ${(<any>this).constructor.name}! 🦆`
    );
    console.log(`-------------------------------------------`);
  }

  public quack(): void {
    console.log(`Quacking!`);
  }

  public swim(): void {
    console.log(`Swimming!`);
  }

  abstract display(): void;
}

export default Duck;
