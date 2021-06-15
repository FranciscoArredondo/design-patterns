export type MenuItemProps = {
  name: string;
  description: string;
  vegitarian: boolean;
  price: number;
};

export default class MenuItem {
  private name: string;
  private description: string;
  private vegitarian: boolean;
  private price: number;

  constructor(props: MenuItemProps) {
    this.name = props.name;
    this.description = props.description;
    this.vegitarian = props.vegitarian;
    this.price = props.price;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getPrice(): number {
    return this.price;
  }

  isVegitarian(): boolean {
    return this.vegitarian;
  }
}
