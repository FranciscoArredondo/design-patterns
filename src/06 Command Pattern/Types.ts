export enum LightState {
  "On",
  "Off",
}

export enum DoorState {
  "Up",
  "Down",
  "Stopped",
}

export enum StereoPowerState {
  "On",
  "Off",
}

export enum StereoCdState {
  "Occupied",
  "Empty",
}

export enum FanSpeed {
  "Off",
  "Low",
  "Medium",
  "High",
}

export type GarageDoorState = {
  doorState: DoorState;
  lightState: LightState;
};

export type StereoState = {
  powerState: StereoPowerState;
  cdState: StereoCdState;
  volumeLevel: number;
};

export type CeilingFanState = {
  speed: FanSpeed;
  prevSpeed: FanSpeed;
};
