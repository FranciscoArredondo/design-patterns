import Amplifier from "./Amplifier";
import CdPlayer from "./CdPlayer";
import Screen from "./Screen";
import DvdPlayer from "./DvdPlayer";
import PopcornPopper from "./PopcornPopper";
import Projector from "./Projector";
import TheaterLights from "./TheaterLights";

export default class HomeTheaterFacade {
  private popper: PopcornPopper;
  private lights: TheaterLights;
  private screen: Screen;
  private amp: Amplifier;
  private dvd: DvdPlayer;
  private cd: CdPlayer;
  private projector: Projector;

  constructor(
    popper: PopcornPopper,
    lights: TheaterLights,
    screen: Screen,
    amp: Amplifier,
    dvd: DvdPlayer,
    cd: CdPlayer,
    projector: Projector
  ) {
    this.popper = popper;
    this.lights = lights;
    this.screen = screen;
    this.amp = amp;
    this.dvd = dvd;
    this.cd = cd;
    this.projector = projector;
  }

  watchMovie(): void {
    this.popper.on();
    this.popper.pop();

    this.lights.dim(10);

    this.screen.down();

    this.projector.on();
    this.projector.wideScreenMode();

    this.amp.on();
    this.amp.setDvd(this.dvd);
    this.amp.setSurroundSound();
    this.amp.setVolume();

    this.dvd.on();
    this.dvd.play();
  }

  endMovie(): void {
    this.dvd.stop();
    this.dvd.off();
    this.amp.off();
    this.projector.off();
    this.screen.up();
    this.lights.on();
    this.popper.off();
  }
}
