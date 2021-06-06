import Command from "./Command";
import NoCommand from "./Commands/NoCommand";

export default class RemoteControl {
  private onCommands: Array<Command>;
  private offCommands: Array<Command>;
  private undoCommand: Command;

  constructor() {
    this.onCommands = new Array(8).fill(new NoCommand());
    this.offCommands = new Array(8).fill(new NoCommand());
    this.undoCommand = new NoCommand();
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number): void {
    if (slot >= 0 && slot < this.onCommands.length) {
      console.log(`\nSlot #${slot} was pressed!`);
      this.onCommands[slot].execute();
      this.undoCommand = this.onCommands[slot];
    }
  }

  offButtonWasPushed(slot: number): void {
    if (slot >= 0 && slot < this.offCommands.length) {
      console.log(`\nSlot #${slot} was pressed!`);
      this.offCommands[slot].execute();
      this.undoCommand = this.offCommands[slot];
    }
  }

  undoButtonWasPushed(): void {
    console.log(`\nUndoing the last command!`);
    this.undoCommand.undo();
  }

  log(): void {
    const str: Array<string> = [];
    const colWidth = 31;
    str.push("");
    str.push(`~~~~~~~Remote Control~~~~~~~`);
    str.push(
      `\t ${"OnCommands".padEnd(colWidth, " ")}${"OffCommands".padEnd(
        colWidth,
        " "
      )}`
    );
    for (let i = 0; i < this.onCommands.length; i++) {
      const onName = this.onCommands[i].constructor.name;
      const offName = this.offCommands[i].constructor.name;
      str.push(
        `[slot ${i}] ${onName.padEnd(colWidth, " ")}${offName.padEnd(
          colWidth,
          " "
        )}`
      );
    }
    str.push("");
    console.log(str.join("\n"));
  }
}
