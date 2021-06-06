import Command from "../Command";
export default class NoCommand implements Command {
  execute(): void {}
  undo(): void {}
}
