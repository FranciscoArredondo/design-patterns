import { StereoCdState, StereoPowerState, StereoState } from "../Types";

export default class Stereo {
  private state: StereoState;

  constructor() {
    this.state = {
      powerState: StereoPowerState.Off,
      cdState: StereoCdState.Empty,
    };
  }

  on(): void {
    this.state.powerState = StereoPowerState.On;
    this.log();
  }

  off(): void {
    this.state.powerState = StereoPowerState.On;
    this.log();
  }

  setCd(): void {
    this.state.cdState = StereoCdState.Occupied;
    this.log();
  }

  ejectCd(): void {
    this.state.cdState = StereoCdState.Empty;
    this.log();
  }

  log() {
    console.log(
      `Stereo is powered ${
        StereoPowerState[this.state.powerState]
      } with it's CD slot ${StereoCdState[this.state.cdState]}`
    );
  }
}
