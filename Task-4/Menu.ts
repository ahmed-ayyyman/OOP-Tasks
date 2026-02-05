import { MenuItem } from "./MenuItem";

export class Menu {
  constructor(
    public resturantName: string,
    public menuItems: MenuItem[] = [],
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
  searchItems(keyword: string): MenuItem | undefined {
    return this.menuItems.find((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase()),
    );
  }
  displayMenu() {
    console.log(`${this.resturantName} Menu:`);
    this.menuItems.forEach((item) => {
      console.log(item.toString());
    });
  }
}
