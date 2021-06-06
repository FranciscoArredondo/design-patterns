import Command from "../../Command";
import { FanSpeed } from "../../Types";
import CeilingFan from "../../Vendors/CeilingFan";

export default class CelingFanHighCommand implements Command {
  private ceilingFan: CeilingFan;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute(): void {
    this.ceilingFan.high();
  }

  undo(): void {
    switch (this.ceilingFan.getPreviousSpeed()) {
      case FanSpeed.High:
        this.ceilingFan.high();
        break;
      case FanSpeed.Medium:
        this.ceilingFan.medium();
        break;
      case FanSpeed.Low:
        this.ceilingFan.low();
        break;
      case FanSpeed.Off:
        this.ceilingFan.off();
        break;
      default:
        this.ceilingFan.off();
        break;
    }
  }
}
