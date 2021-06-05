export enum LightState {
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
  lightState: LightState;
};
