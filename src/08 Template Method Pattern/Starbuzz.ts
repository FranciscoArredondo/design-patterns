import Coffee from "./Coffee";
import Tea from "./Tea";

export default class Starbuzz {
  static main(): void {
    const coffee = new Coffee();
    const tea = new Tea();

    console.log(`\nMaking Coffee...`);
    coffee.prepareRecipe();
    console.log(`\nMaking Tea...`);
    tea.prepareRecipe();
  }
}
