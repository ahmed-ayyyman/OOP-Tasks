import { Room } from "./Room";
import { Reservation } from "./Reservation";
import { Guest } from "./Guest";
import { Service } from "./Service";
import { RoomType, RoomStatus } from "./Enums";

export class Hotel {
  private rooms: Room[] = [];
  private reservations: Reservation[] = [];
  private guests: Guest[] = [];
  private availableServices: Service[] = [];

  constructor(
    public hotelName: string,
    public address: string,
  ) {}

  addRoom(room: Room): void {
    this.rooms.push(room);
  }

  registerGuest(guest: Guest): void {
    this.guests.push(guest);
  }

  addService(service: Service): void {
    this.availableServices.push(service);
  }

  getAvailableRooms(checkIn: Date, checkOut: Date): Room[] {
    return this.rooms.filter((room) => {
      const isOccupied = this.reservations.some(
        (res) =>
          res.room === room &&
          res.checkInDate < checkOut &&
          res.checkOutDate > checkIn,
      );
      return !isOccupied && room.status === RoomStatus.Available;
    });
  }

  getAvailableRoomsByType(
    type: RoomType,
    checkIn: Date,
    checkOut: Date,
  ): Room[] {
    return this.getAvailableRooms(checkIn, checkOut).filter(
      (room) => room.type === type,
    );
  }

  createReservation(
    guest: Guest,
    room: Room,
    checkIn: Date,
    checkOut: Date,
    totalGuests: number,
  ): Reservation {
    const reservation = new Reservation(
      `RES-${Date.now()}`,
      guest,
      room,
      checkIn,
      checkOut,
      0, // Pending status
      [],
      totalGuests,
    );
    this.reservations.push(reservation);
    return reservation;
  }

  cancelReservation(reservationId: string): void {
    const reservation = this.reservations.find(
      (res) => res.reservationId === reservationId,
    );
    if (reservation) {
      reservation.cancel();
    }
  }

  checkInGuest(reservationId: string): void {
    const reservation = this.reservations.find(
      (res) => res.reservationId === reservationId,
    );
    if (reservation) {
      reservation.checkIn();
    }
  }

  checkOutGuest(reservationId: string): void {
    const reservation = this.reservations.find(
      (res) => res.reservationId === reservationId,
    );
    if (reservation) {
      reservation.checkOut();
    }
  }

  getReservationsByGuest(guestId: string): Reservation[] {
    return this.reservations.filter((res) => res.guest.guestId === guestId);
  }

  getCurrentOccupancy(): number {
    const occupiedRooms = this.rooms.filter(
      (room) => room.status === RoomStatus.Occupied,
    ).length;
    return (occupiedRooms / this.rooms.length) * 100;
  }

  getRevenue(startDate: Date, endDate: Date): number {
    return this.reservations
      .filter(
        (res) => res.checkInDate >= startDate && res.checkOutDate <= endDate,
      )
      .reduce((total, res) => total + res.getTotal(), 0);
  }

  displayHotelStatus(): string {
    const totalRooms = this.rooms.length;
    const occupiedRooms = this.rooms.filter(
      (room) => room.status === RoomStatus.Occupied,
    ).length;
    const availableRooms = this.rooms.filter(
      (room) => room.status === RoomStatus.Available,
    ).length;

    return `
=== ${this.hotelName} ===
Address: ${this.address}
Total Rooms: ${totalRooms}
Occupied: ${occupiedRooms}
Available: ${availableRooms}
Occupancy Rate: ${this.getCurrentOccupancy().toFixed(2)}%
Total Guests: ${this.guests.length}
Total Reservations: ${this.reservations.length}
    `;
  }
}
