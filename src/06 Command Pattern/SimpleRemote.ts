import Command from "./Command";

export default class SimpleRemote {
  private slot: Command | undefined;

  constructor() {}

  setCommand(command: Command) {
    this.slot = command;
  }

  buttonWasPressed(): void {
    console.log(`Button was pressed!`);
    this.slot?.execute();
  }
}
