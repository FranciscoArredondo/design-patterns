import Command from "../../Command";
import GarageDoor from "../../Vendors/GarageDoor";

export default class GarageDoorLightOffCommand implements Command {
  private garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.lightOff();
  }

  undo(): void {
    this.garageDoor.lightOn();
  }
}
