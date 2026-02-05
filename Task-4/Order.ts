import { MenuItem } from "./MenuItem";
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
    public orderItems: OrderItem[] = [],
    public orderTime: Date,
    public status: OrderStatus,
  ) {}
  addItem(menuItem: MenuItem, quantity: number, instructions: string) {
    this.orderItems.push(new OrderItem(menuItem, quantity, instructions));
  }
  removeItem(itemId: string) {
    this.orderItems = this.orderItems.filter(
      (i) => i.menuItem.itemId !== itemId,
    );
  }
  getSubtotal(): number {
    return this.orderItems.reduce((sum, i) => sum + i.menuItem.price, 0);
  }
  getTax(): number {
    return this.getSubtotal() * 0.08;
  }
  getTotal(): number {
    return this.getSubtotal() + this.getTax();
  }
  calculateTip(percentage: number): number {
    return this.getSubtotal() * (percentage / 100);
  }
  updateStatus(newStatus: OrderStatus) {
    this.status = newStatus;
  }
  getOrderSummary(): string {
    let summary = `Order Summary: Order ID: ${this.orderId}\n`;
    summary += `Table Number: ${this.tableNumber}\n`;
    summary += `Order Time: ${this.orderTime.toLocaleString()}\n`;
    summary += `Order Status: ${this.status}\n`;
    summary += `Subtotal: $${this.getSubtotal().toFixed(2)}\n`;
    summary += `Tax: $${(this.getTax() * 100).toFixed(2)}%\n`;
    summary += `Total: $${this.getTotal().toFixed(2)}\n\n`;
    this.orderItems.forEach((item) => {
      summary += `Item: ${item.menuItem.name}\n`;
      summary += `Quantity: ${item.quantity}\n`;
      summary += `Price: $${item.menuItem.price.toFixed(2)}\n`;
      summary += `Instructions: ${item.instructions}\n\n`;
    });
    return summary;
  }
}
