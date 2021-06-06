import Command from "../../Command";
import GarageDoor from "../../Vendors/GarageDoor";

export default class GarageDoorStopCommand implements Command {
  private garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.stop();
  }

  undo(): void {
    this.garageDoor.down();
  }
}
