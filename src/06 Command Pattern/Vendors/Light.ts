import { LightState } from "../Types";

export default class Light {
  private state: LightState;

  constructor() {
    this.state = LightState.Off;
  }

  on(): void {
    this.state = LightState.On;
    console.log(`Light is now ${LightState[this.state]}\n`);
  }

  off(): void {
    this.state = LightState.Off;
    console.log(`Light is now ${LightState[this.state]}\n`);
  }

  getState(): LightState {
    return this.state;
  }

  log(): void {
    console.log(`This light is ${LightState[this.state]}`);
  }
}
