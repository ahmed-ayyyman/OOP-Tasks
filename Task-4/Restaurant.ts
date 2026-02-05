import { Menu } from "./Menu";
import { Order, OrderStatus } from "./Order";
import { MenuItem } from "./MenuItem";

export class Restaurant {
  constructor(
    public restaurantName: string,
    public menu: Menu,
    public orders: Order[] = [],
    public taxRate: number = 0.08,
  ) {}
  createOrder(tableNumber: number): Order {
    const orderId = `ORD-${Date.now()}`;
    const newOrder = new Order(orderId, tableNumber, [], new Date(), "Pending");
    this.orders.push(newOrder);
    return newOrder;
  }

  getOrder(orderId: string): Order | undefined {
    return this.orders.find((order) => order.orderId === orderId);
  }

  getOrdersByStatus(status: OrderStatus): Order[] {
    return this.orders.filter((order) => order.status === status);
  }

  getActiveOrders(): Order[] {
    return this.orders.filter((order) => order.status !== "Completed");
  }

  completeOrder(orderId: string): boolean {
    const order = this.getOrder(orderId);
    if (order) {
      order.updateStatus("Completed");
      return true;
    }
    return false;
  }

  getTotalRevenue(): number {
    return this.orders
      .filter((order) => order.status === "Completed")
      .reduce((total, order) => total + order.getTotal(), 0);
  }

  getPopularItems(count: number): MenuItem[] {
    const itemCounts = new Map<string, number>();

    this.orders.forEach((order) => {
      order.orderItems.forEach((orderItem) => {
        const itemId = orderItem.menuItem.itemId;
        itemCounts.set(
          itemId,
          (itemCounts.get(itemId) || 0) + orderItem.quantity,
        );
      });
    });

    const sortedItems = Array.from(itemCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, count);

    return sortedItems
      .map(([itemId]) =>
        this.menu.menuItems.find((item) => item.itemId === itemId),
      )
      .filter(Boolean) as MenuItem[];
  }
}
