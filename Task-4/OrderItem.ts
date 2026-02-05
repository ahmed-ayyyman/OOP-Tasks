import { MenuItem } from "./MenuItem";

export class OrderItem {
  constructor(
    public menuItem: MenuItem,
    public quantity: number,
    public instructions: string,
  ) {}
  getSubTotal(): number {
    return this.quantity * this.menuItem.price;
  }
}
