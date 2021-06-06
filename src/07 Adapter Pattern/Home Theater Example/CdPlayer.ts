import Amplifier from "./Amplifier";

export default class CdPlayer {
  private amplifier: Amplifier;
  constructor(amplifier: Amplifier) {
    this.amplifier = amplifier;
  }

  on() {
    console.log(`Turning the CD player on!`);
  }

  off() {
    console.log(`Turning the CD player off!`);
  }

  eject() {
    console.log(`The CD player has ejected a dvd!`);
  }

  pause() {
    console.log(`The CD player has been paused!`);
  }

  play() {
    console.log(`The CD player is now playing!`);
  }

  stop() {
    console.log(`The CD player has been stopped!`);
  }
}
