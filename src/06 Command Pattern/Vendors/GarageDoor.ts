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
    console.log(`Garage door is going ${DoorState[this.state.doorState]}`);
    this.state.doorState = DoorState.Up;
  }

  down() {
    console.log(`Garage door is going ${DoorState[this.state.doorState]}`);
    this.state.doorState = DoorState.Down;
  }

  stop() {
    console.log(`Garage door is ${DoorState[this.state.doorState]}`);
    this.state.doorState = DoorState.Stopped;
  }

  lightOn() {
    console.log(`The Garage light is now ${LightState[this.state.lightState]}`);
    this.state.lightState = LightState.On;
  }

  lightOff() {
    console.log(`The Garage light is now ${LightState[this.state.lightState]}`);
    this.state.lightState = LightState.Off;
  }

  getDoorState() {
    return this.state.doorState;
  }

  getLightState() {
    return this.state.lightState;
  }
}
