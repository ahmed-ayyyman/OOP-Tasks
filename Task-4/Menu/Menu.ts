import { MenuItem } from "./MenuItem";

export class Menu {
  constructor(
    public restaurantName: string,
    private menuItems: MenuItem[] = [],
  ) {}

  addMenuItem(item: MenuItem) {
    this.menuItems.push(item);
  }

  removeMenuItem(itemId: string) {
    this.menuItems = this.menuItems.filter((i) => i.itemId !== itemId);
  }

  getItemsByCategory(category: string): MenuItem[] {
    return this.menuItems.filter((item) => item.category === category);
  }

  searchItems(keyword: string): MenuItem[] {
    return this.menuItems.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase()),
    );
  }

  getAllItems(): MenuItem[] {
    return [...this.menuItems];
  }
}
