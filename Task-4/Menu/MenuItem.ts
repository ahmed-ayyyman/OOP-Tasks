export class MenuItem {
  constructor(
    public itemId: string,
    public name: string,
    public description: string,
    public price: number,
    public category: string,
    public isAvailable: boolean,
  ) {}
  getItemInfo(): string {
    return `${this.name} - $${this.price.toFixed(2)} (${this.category})`;
  }
}
