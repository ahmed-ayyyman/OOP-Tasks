import { MenuItem } from "../Menu/MenuItem";
import { OrderItem } from "./OrderItem";

export type OrderStatus =
  | "Pending"
  | "Preparing"
  | "Ready"
  | "Served"
  | "Completed";

export class Order {
  constructor(
    public orderId: string,
    public tableNumber: number,
    public orderTime: Date,
    public status: OrderStatus,
    private orderItems: OrderItem[] = [],
  ) {}

  addItem(menuItem: MenuItem, quantity: number, instructions: string) {
    this.orderItems.push(new OrderItem(menuItem, quantity, instructions));
  }

  removeItem(itemId: string) {
    this.orderItems = this.orderItems.filter(
      (i) => i.menuItem.itemId !== itemId,
    );
  }

  getItems(): OrderItem[] {
    return [...this.orderItems]; // protect internal state
  }

  getSubtotal(): number {
    return this.orderItems.reduce(
      (sum, i) => sum + i.menuItem.price * i.quantity,
      0,
    );
  }

  getTax(taxRate: number): number {
    return this.getSubtotal() * taxRate;
  }

  getTotal(taxRate: number): number {
    return this.getSubtotal() + this.getTax(taxRate);
  }

  calculateTip(percentage: number): number {
    return this.getSubtotal() * (percentage / 100);
  }

  updateStatus(newStatus: OrderStatus) {
    this.status = newStatus;
  }
}
