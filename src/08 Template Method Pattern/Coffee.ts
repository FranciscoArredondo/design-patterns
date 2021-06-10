import CaffineBeverage from "./CaffineBeverage";
import * as readline from "readline";

export default class Coffee extends CaffineBeverage {
  brew(): void {
    console.log(`Dripping Coffee through filter`);
  }

  addCondiments(): void {
    console.log(`Adding Sugar and Milk`);
  }

  async readLine(question: string): Promise<string> {
    const sleep = (milliseconds: number) => {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    let response = "";
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false,
    });
    rl.question(question, (answer) => {
      response = answer.trim().toLowerCase();
      rl.close();
    });
    while (response === "") {
      await sleep(100);
    }
    return response;
  }

  async customerWantsCondiments(): Promise<boolean> {
    let response = await this.readLine(
      "Would you like milk and sugar with your coffee? (y/n): "
    );
    if (response.startsWith("y")) {
      return true;
    } else {
      return false;
    }
  }
}
