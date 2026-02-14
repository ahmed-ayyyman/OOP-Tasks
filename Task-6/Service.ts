import { IChargeable } from "./IChargeableInterface";

export class Service implements IChargeable {
  constructor(
    public serviceId: string,
    public name: string,
    public price: number,
    public description: string,
  ) {}

  getPrice(): number {
    return this.price;
  }

  getDescription(): string {
    return `${this.name} - ${this.description}`;
  }
}
