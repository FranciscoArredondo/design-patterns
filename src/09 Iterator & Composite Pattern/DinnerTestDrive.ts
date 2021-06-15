import MenuItem from "./MenuItem";

export default class DinnerTestDrive {
  static main(): void {
    const menuItem = new MenuItem({
      name: "Soup of the Day",
      description: "A bowl of the soup of the day with a potato salad.",
      price: 12.95,
      vegitarian: false,
    });

    console.log(
      `${menuItem.getName()}, ${menuItem.getPrice()} -- ${menuItem.getDescription()}`
    );
  }
}
