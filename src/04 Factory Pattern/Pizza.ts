export default abstract class Pizza {
  protected abstract type: string;
  prepare(): void {
    console.log(`\nPreparing a ${this.type} pizza...`);
  }
  bake(): void {
    console.log(`Baking a ${this.type} pizza...`);
  }
  cut(): void {
    console.log(`Slicing up a ${this.type} pizza...`);
  }
  box(): void {
    console.log(`Boxing up a ${this.type} pizza...`);
  }
}
