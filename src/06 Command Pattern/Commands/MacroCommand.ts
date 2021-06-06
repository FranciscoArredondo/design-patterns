import Command from "../Command";

export default class MacroCommand implements Command {
  private commands: Array<Command>;

  constructor(commands: Array<Command>) {
    this.commands = commands;
  }

  execute(): void {
    for (const command of this.commands) {
      command.execute();
    }
  }

  undo(): void {
    for (const command of this.commands) {
      command.undo();
    }
  }
}
