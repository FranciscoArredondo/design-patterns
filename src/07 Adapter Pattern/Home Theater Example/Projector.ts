import DvdPlayer from "./DvdPlayer";

export default class Projector {
  private dvdPlayer: DvdPlayer;

  constructor(dvdPlayer: DvdPlayer) {
    this.dvdPlayer = dvdPlayer;
  }

  on(): void {
    console.log(`The dvd player is now on!`);
  }

  off(): void {
    console.log(`The dvd player is now off!`);
  }

  tvMode(): void {
    console.log(`The dvd player is now in tv-mode!`);
  }

  wideScreenMode(): void {
    console.log(`The dvd player is now in wide-screen mode!`);
  }
}
