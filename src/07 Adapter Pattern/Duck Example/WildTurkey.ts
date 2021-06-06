import Turkey from "./Turkey";

export default class WildTurkey implements Turkey {
  gobble(): void {
    console.log(`Gobble Gobble!`);
  }
  fly(): void {
    console.log(`Flying a short distance!`);
  }
}
