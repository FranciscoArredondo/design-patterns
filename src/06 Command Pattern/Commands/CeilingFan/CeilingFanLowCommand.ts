import Command from "../../Command";
import { FanSpeed } from "../../Types";
import CeilingFan from "../../Vendors/CeilingFan";

export default class CelingFanLowCommand implements Command {
  private ceilingFan: CeilingFan;
  private prevState: FanSpeed;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
    this.prevState = ceilingFan.getSpeed();
  }

  execute(): void {
    this.prevState = this.ceilingFan.getSpeed();
    this.ceilingFan.low();
  }

  undo(): void {
    switch (this.prevState) {
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
