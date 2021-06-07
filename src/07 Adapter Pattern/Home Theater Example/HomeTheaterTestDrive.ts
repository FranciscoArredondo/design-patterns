import Amplifier from "./Amplifier";
import CdPlayer from "./CdPlayer";
import DvdPlayer from "./DvdPlayer";
import PopcornPopper from "./PopcornPopper";
import Projector from "./Projector";
import Screen from "./Screen";
import TheaterLights from "./TheaterLights";

export default class HomeTheaterTestDrive {
  static main(): void {
    // So to watch a movie we've got to do all this...
    const popper = new PopcornPopper();
    const lights = new TheaterLights();
    const screen = new Screen();
    const amp = new Amplifier();
    const dvdPlayer = new DvdPlayer(amp);
    const cdPlayer = new CdPlayer(amp);
    const projector = new Projector(dvdPlayer);

    console.log(`\n~~~~~~~Test driving the home theater system~~~~~~~`);

    popper.on();
    popper.pop();

    lights.dim(10);

    screen.down();

    projector.on();
    projector.wideScreenMode();

    amp.on();
    amp.setDvd(dvdPlayer);
    amp.setSurroundSound();
    amp.setVolume();

    dvdPlayer.on();
    dvdPlayer.play();
  }
}
