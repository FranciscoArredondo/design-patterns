import Command from "./Command";
import NoCommand from "./Commands/NoCommand";

export default class RemoteControl {
  private onCommands: Array<Command>;
  private offCommands: Array<Command>;

  constructor() {
    this.onCommands = new Array(8).fill(new NoCommand());
    this.offCommands = new Array(8).fill(new NoCommand());
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number): void {
    if (slot >= 0 && slot < this.onCommands.length) {
      console.log(`\nSlot #${slot} was pressed!`);
      this.onCommands[slot].execute();
    }
  }

  offButtonWasPushed(slot: number): void {
    if (slot >= 0 && slot < this.offCommands.length) {
      console.log(`\nSlot #${slot} was pressed!`);
      this.offCommands[slot].execute();
    }
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
