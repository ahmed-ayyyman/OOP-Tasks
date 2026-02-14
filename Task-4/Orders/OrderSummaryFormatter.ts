import { Order } from "./Order";

export class OrderSummaryFormatter {
  static format(order: Order, taxRate: number): string {
    let summary = `Order Summary: Order ID: ${order.orderId}\n`;
    summary += `Table Number: ${order.tableNumber}\n`;
    summary += `Order Time: ${order.orderTime.toLocaleString()}\n`;
    summary += `Order Status: ${order.status}\n`;
    summary += `Subtotal: $${order.getSubtotal().toFixed(2)}\n`;
    summary += `Tax (${(taxRate * 100).toFixed(0)}%): $${order
      .getTax(taxRate)
      .toFixed(2)}\n`;
    summary += `Total: $${order.getTotal(taxRate).toFixed(2)}\n\n`;

    order.getItems().forEach((item) => {
      summary += `Item: ${item.menuItem.name}\n`;
      summary += `Quantity: ${item.quantity}\n`;
      summary += `Price: $${item.menuItem.price.toFixed(2)}\n`;
      summary += `Instructions: ${item.instructions}\n\n`;
    });

    return summary;
  }
}
