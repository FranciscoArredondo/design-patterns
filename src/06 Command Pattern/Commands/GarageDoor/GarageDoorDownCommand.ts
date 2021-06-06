import Command from "../../Command";
import GarageDoor from "../../Vendors/GarageDoor";

export default class GarageDoorDownCommand implements Command {
  private garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.down();
  }

  undo(): void {
    this.garageDoor.up();
  }
}
