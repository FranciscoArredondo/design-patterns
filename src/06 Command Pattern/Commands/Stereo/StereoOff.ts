import Command from "../../Command";
import Stereo from "../../Vendors/Stereo";

export default class StereoOff implements Command {
  private stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute(): void {
    this.stereo.setVolume(0);
    this.stereo.off();
  }

  undo(): void {
    this.stereo.on();
    this.stereo.setVolume(5);
  }
}
