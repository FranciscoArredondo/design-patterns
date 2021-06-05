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
    console.log(`Garage door is going ${DoorState[this.state.doorState]}\n`);
  }

  down() {
    this.state.doorState = DoorState.Down;
    console.log(`Garage door is going ${DoorState[this.state.doorState]}\n`);
  }

  stop() {
    this.state.doorState = DoorState.Stopped;
    console.log(`Garage door is ${DoorState[this.state.doorState]}\n`);
  }

  lightOn() {
    this.state.lightState = LightState.On;
    console.log(
      `The Garage light is now ${LightState[this.state.lightState]}\n`
    );
  }

  lightOff() {
    this.state.lightState = LightState.Off;
    console.log(
      `The Garage light is now ${LightState[this.state.lightState]}\n`
    );
  }

  getDoorState() {
    return this.state.doorState;
  }

  getLightState() {
    return this.state.lightState;
  }

  log(): void {
    console.log(
      `The garage door is ${DoorState[this.state.doorState]} with the lights ${
        LightState[this.state.lightState]
      }.`
    );
  }
}
