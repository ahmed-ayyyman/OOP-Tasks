import { RoomType, RoomStatus } from "./Enums";
import { IChargeable } from "./IChargeableInterface";

export class Room implements IChargeable {
  constructor(
    public roomNumber: string,
    public type: RoomType,
    public status: RoomStatus,
    public floor: number,
    public pricePerNight: number,
    public maxOccupancy: number,
    public amenities: string[],
  ) {}

  getPrice(): number {
    return this.pricePerNight;
  }

  getDescription(): string {
    return `${this.type} Room - $${this.pricePerNight}/night`;
  }
  isAvailable(): boolean {
    return this.status === RoomStatus.Available;
  }
  changeStatus(newStatus: RoomStatus): void {
    this.status = newStatus;
  }
}
