import Amplifier from "./Amplifier";

export default class Tuner {
  private amplifier: Amplifier;
  constructor(amplifier: Amplifier) {
    this.amplifier = amplifier;
  }

  on() {
    console.log(`Turning the tuner on!`);
  }

  off() {
    console.log(`Turning the tuner off!`);
  }

  setAm() {
    console.log(`Setting the tuner to AM!`);
  }

  setFM() {
    console.log(`Setting the tuner to FM!`);
  }

  setFrequency(freq: number) {
    console.log(`Setting the tunner to ${freq}!`);
  }
}
