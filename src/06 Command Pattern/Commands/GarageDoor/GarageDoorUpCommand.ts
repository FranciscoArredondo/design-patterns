import Command from "../../Command";
import GarageDoor from "../../Vendors/GarageDoor";

export default class GarageDoorUpCommand implements Command {
  private garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.up();
  }

  undo(): void {
    this.garageDoor.down();
  }
}
