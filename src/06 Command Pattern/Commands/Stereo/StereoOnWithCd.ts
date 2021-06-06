import Command from "../../Command";
import Stereo from "../../Vendors/Stereo";

export default class StereoOnWithCd implements Command {
  private stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }
  execute(): void {
    this.stereo.on();
    this.stereo.setVolume(5);
    this.stereo.setCd();
  }
}
