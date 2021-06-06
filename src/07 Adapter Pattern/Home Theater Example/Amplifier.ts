import CdPlayer from "./CdPlayer";
import DvdPlayer from "./DvdPlayer";
import Tuner from "./Tuner";

export default class Amplifier {
  private tuner: Tuner;
  private cdPlayer: CdPlayer;
  private dvdPlayer: DvdPlayer;

  constructor(tuner: Tuner, cdPlayer: CdPlayer, dvdPlayer: DvdPlayer) {
    this.tuner = tuner;
    this.cdPlayer = cdPlayer;
    this.dvdPlayer = dvdPlayer;
  }

  on(): void {
    console.log(`The amplifier is now on!`);
  }

  off(): void {
    console.log(`The amplifier is now off!`);
  }

  setCd(): void {
    console.log(`Inserting a CD...`);
  }

  setDvd(): void {
    console.log(`Inserting a DVD...`);
  }

  setStereo(): void {
    console.log(`The stereo has been set!`);
  }

  setSurroundSound(): void {
    console.log(`The surround sound has been set!`);
  }

  setTuner(): void {
    console.log(`The tuner has been set!`);
  }

  setVolume(): void {
    console.log(`The volume has been set!`);
  }
}
