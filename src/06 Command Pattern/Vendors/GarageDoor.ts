import { DoorState, GarageDoorState, State } from "../Types";

export default class GarageDoor {
  private state: GarageDoorState;

  constructor() {
    this.state = {
      doorState: DoorState.Down,
      lightState: State.On,
    };
  }

  up() {
    this.state.doorState = DoorState.Up;
  }

  down() {
    this.state.doorState = DoorState.Down;
  }

  stop() {
    this.state.doorState = DoorState.Stopped;
  }

  lightOn() {
    this.state.lightState = State.On;
  }

  lightOff() {
    this.state.lightState = State.Off;
  }

  getDoorState() {
    return this.state.doorState;
  }

  getLightState() {
    return this.state.lightState;
  }
}
