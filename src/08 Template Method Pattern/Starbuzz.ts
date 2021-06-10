import Coffee from "./Coffee";
import Tea from "./Tea";

export default class Starbuzz {
  static async main(): Promise<void> {
    const coffee = new Coffee();
    const tea = new Tea();

    console.log(`\nMaking Coffee...`);
    await coffee.prepareRecipe();
    console.log(`\nMaking Tea...`);
    await tea.prepareRecipe();
  }
}
