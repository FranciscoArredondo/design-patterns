import { CeilingFanState, FanSpeed } from "../Types";

export default class CeilingFan {
  private state: CeilingFanState;

  constructor() {
    this.state = { speed: FanSpeed.Off, prevSpeed: FanSpeed.Off };
  }

  high(): void {
    this.state.prevSpeed = this.getSpeed();
    this.state.speed = FanSpeed.High;
    console.log(`\nSetting fan speed to ${FanSpeed[this.state.speed]}`);
  }

  medium(): void {
    this.state.prevSpeed = this.getSpeed();
    this.state.speed = FanSpeed.Medium;
    console.log(`\nSetting fan speed to ${FanSpeed[this.state.speed]}`);
  }

  low(): void {
    this.state.prevSpeed = this.getSpeed();
    this.state.speed = FanSpeed.Low;
    console.log(`\nSetting fan speed to ${FanSpeed[this.state.speed]}`);
  }

  off(): void {
    this.state.prevSpeed = this.getSpeed();
    this.state.speed = FanSpeed.Off;
    console.log(`\nTurning the fan ${FanSpeed[this.state.speed]}`);
  }

  getSpeed(): FanSpeed {
    return this.state.speed;
  }

  getPreviousSpeed(): FanSpeed {
    return this.state.prevSpeed;
  }
}
