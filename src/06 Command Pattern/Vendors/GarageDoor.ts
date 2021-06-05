import { DoorState, GarageDoorState, LightState } from "../Types";

export default class GarageDoor {
  private state: GarageDoorState;

  constructor() {
    this.state = {
      doorState: DoorState.Down,
      lightState: LightState.On,
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
    this.state.lightState = LightState.On;
  }

  lightOff() {
    this.state.lightState = LightState.Off;
  }

  getDoorState() {
    return this.state.doorState;
  }

  getLightState() {
    return this.state.lightState;
  }
}
