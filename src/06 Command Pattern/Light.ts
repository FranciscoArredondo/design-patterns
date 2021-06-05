import { State } from "./Types";

export default class Light {
  private state: State;

  constructor() {
    this.state = State.Off;
  }

  on(): void {
    this.state = State.On;
  }

  off(): void {
    this.state = State.Off;
  }

  getState(): State {
    return this.state;
  }

  log(): void {
    console.log(`This light is ${State[this.state]}`);
  }
}
