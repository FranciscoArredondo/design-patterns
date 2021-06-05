export enum State {
  "On",
  "Off",
}

export enum DoorState {
  "Up",
  "Down",
  "Stopped",
}

export type GarageDoorState = {
  doorState: DoorState;
  lightState: State;
};
