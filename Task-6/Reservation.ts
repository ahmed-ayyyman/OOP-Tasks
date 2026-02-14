import { Guest } from "./Guest";
import { Room } from "./Room";
import { Service } from "./Service";
import { ReservationStatus, RoomStatus, RoomType } from "./Enums";

export class Reservation {
  constructor(
    public reservationId: string,
    public guest: Guest,
    public room: Room,
    public checkInDate: Date,
    public checkOutDate: Date,
    public status: ReservationStatus,
    public services: Service[],
    public totalGuests: number,
  ) {}
  getNumberOfNights(): number {
    const msPerDay = 1000 * 60 * 60 * 24;

    const start = new Date(
      this.checkInDate.getFullYear(),
      this.checkInDate.getMonth(),
      this.checkInDate.getDate(),
    );

    const end = new Date(
      this.checkOutDate.getFullYear(),
      this.checkOutDate.getMonth(),
      this.checkOutDate.getDate(),
    );

    const diffInMs = end.getTime() - start.getTime();

    return Math.max(0, Math.floor(diffInMs / msPerDay));
  }
  getRoomCost(): number {
    return this.room.getPrice() * this.getNumberOfNights();
  }
  getServicesCost(): number {
    return this.services.reduce(
      (total, service) => total + service.getPrice(),
      0,
    );
  }
  getTotal(): number {
    return this.getRoomCost() + this.getServicesCost();
  }
  addService(service: Service): void {
    this.services.push(service);
  }
  checkIn(): void {
    this.room.status = RoomStatus.Occupied;
    this.status = ReservationStatus.CheckedIn;
  }
  checkOut(): void {
    this.room.status = RoomStatus.Reserved;
    this.status = ReservationStatus.CheckedOut;
  }
  cancel(): void {
    this.room.status = RoomStatus.Available;
    this.status = ReservationStatus.Cancelled;
  }
  getReservationDetails(): string {
    return `Reservation ID: ${this.reservationId}, Guest: ${this.guest.name}, Room: ${this.room.roomNumber}, Check-in: ${this.checkInDate.toDateString()}, Check-out: ${this.checkOutDate.toDateString()}, Status: ${this.status}, Total: $${this.getTotal()}`;
  }
}
