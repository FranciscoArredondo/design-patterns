import Command from "./Command";

export default class RemoteControl {
  private onCommands: Array<Command>;
  private offCommands: Array<Command>;

  constructor() {
    this.onCommands = new Array(8);
    this.offCommands = new Array(8);
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number): void {
    if (
      this.onCommands[slot] !== undefined &&
      this.onCommands[slot] !== null &&
      slot >= 0 &&
      slot < this.onCommands.length
    ) {
      console.log(`Slot #${slot} On Button was pressed!`);
      this.onCommands[slot].execute();
    } else {
      if (slot > this.onCommands.length || slot < 0) {
        console.log(`There's no slot #${slot}! What are you doing!?\n`);
      } else {
        console.log(
          `Slot #${slot} was pressed, but has no command assigned!\n`
        );
      }
    }
  }

  offButtonWasPushed(slot: number): void {
    if (
      this.offCommands[slot] !== undefined &&
      this.offCommands[slot] !== null &&
      slot >= 0 &&
      slot < this.offCommands.length
    ) {
      console.log(`\nSlot #${slot} Off Button was pressed!`);
      this.offCommands[slot].execute();
    } else {
      if (slot > this.offCommands.length || slot < 0) {
        console.log(`There's no slot #${slot}! What are you doing!?\n`);
      } else {
        console.log(`Slot #${slot} was pressed, but has no command assigned!`);
      }
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
      const onName =
        this.onCommands[i] !== undefined
          ? this.onCommands[i].constructor.name
          : "Empty";
      const offName =
        this.offCommands[i] !== undefined
          ? this.offCommands[i].constructor.name
          : "Empty";
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
