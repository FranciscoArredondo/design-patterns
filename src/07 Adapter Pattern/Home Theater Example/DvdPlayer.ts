import Amplifier from "./Amplifier";

export default class DvdPlayer {
  private amplifier: Amplifier;

  constructor(amplifier: Amplifier) {
    this.amplifier = amplifier;
  }

  on() {
    console.log(`The dvd player has been turned on!`);
  }

  off() {
    console.log(`The dvd player has been turned off!`);
  }

  eject() {
    console.log(`The dvd player has ejected a dvd!`);
  }

  pause() {
    console.log(`The dvd player has been paused!`);
  }

  play() {
    console.log(`The dvd player is now playing!`);
  }

  stop() {
    console.log(`The dvd player has been stopped!`);
  }

  setSurroundAudio() {
    console.log(`The dvd player has set surround audio!`);
  }

  setTwoChannelAudio() {
    console.log(`The dvd player has set two-channel audio!`);
  }
}
