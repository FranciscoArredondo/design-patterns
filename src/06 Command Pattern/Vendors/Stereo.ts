import { StereoCdState, StereoPowerState, StereoState } from "../Types";

export default class Stereo {
  private state: StereoState;

  constructor() {
    this.state = {
      powerState: StereoPowerState.Off,
      cdState: StereoCdState.Empty,
      volumeLevel: 0,
    };
  }

  on(): void {
    this.state.powerState = StereoPowerState.On;
    console.log(`Turning on the stereo!`);
  }

  off(): void {
    this.state.powerState = StereoPowerState.On;
    console.log(`Turning off the stereo!`);
  }

  setCd(): void {
    this.state.cdState = StereoCdState.Occupied;
    console.log(`Placing a CD in the stereo!`);
  }

  ejectCd(): void {
    this.state.cdState = StereoCdState.Empty;
    console.log(`Ejecting the CD from the stereo!`);
  }

  setVolume(level: number) {
    this.state.volumeLevel = level;
    console.log(`Setting the stereo vloume to ${level}!`);
  }

  log() {
    console.log(
      `Stereo is powered ${
        StereoPowerState[this.state.powerState]
      } with it's CD slot ${
        StereoCdState[this.state.cdState]
      } playing with its volume set to ${this.state.volumeLevel}\n`
    );
  }
}
