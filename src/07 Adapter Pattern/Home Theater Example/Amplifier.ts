import CdPlayer from "./CdPlayer";
import DvdPlayer from "./DvdPlayer";
import Tuner from "./Tuner";

export default class Amplifier {
  private tuner: Tuner | undefined;
  private cdPlayer: CdPlayer | undefined;
  private dvdPlayer: DvdPlayer | undefined;

  on(): void {
    console.log(`The amplifier is now on!`);
  }

  off(): void {
    console.log(`The amplifier is now off!`);
  }

  setCd(cdPlayer: CdPlayer): void {
    this.cdPlayer = cdPlayer;
  }

  setDvd(dvdPlayer: DvdPlayer): void {
    this.dvdPlayer = dvdPlayer;
  }

  setStereo(): void {
    console.log(`The stereo has been set!`);
  }

  setSurroundSound(): void {
    console.log(`The surround sound has been set!`);
  }

  setTuner(tuner: Tuner): void {
    this.tuner = tuner;
  }

  setVolume(): void {
    console.log(`The volume has been set!`);
  }
}
