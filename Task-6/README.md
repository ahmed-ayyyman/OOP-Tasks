# Task-6: Hotel Management System

## Overview

A comprehensive TypeScript-based hotel management system that handles room bookings, guest registrations, reservations, and billing.

## Classes

### 1. **Enums.ts**

Defines the core enumerations used throughout the system:

- **RoomType**: Single, Double, Suite, Deluxe, Presidential
- **RoomStatus**: Available, Occupied, UnderMaintenance, Reserved
- **ReservationStatus**: Pending, Confirmed, CheckedIn, CheckedOut, Cancelled

### 2. **IChargeableInterface.ts**

Interface for chargeable items in the system:

```typescript
interface IChargeable {
  getPrice(): number;
  getDescription(): string;
}
```

### 3. **Room.ts** (implements IChargeable)

Represents a hotel room with its details and pricing.

**Properties:**

- `roomNumber: string` - Unique room identifier
- `type: RoomType` - Room classification
- `status: RoomStatus` - Current room status
- `floor: number` - Floor number
- `pricePerNight: number` - Nightly rate
- `maxOccupancy: number` - Maximum guests allowed
- `amenities: string[]` - List of room amenities

**Methods:**

- `getPrice(): number` - Returns nightly price
- `getDescription(): string` - Returns room details

### 4. **Guest.ts**

Represents a hotel guest with loyalty tracking.

**Properties:**

- `guestId: string` - Unique guest identifier
- `name: string` - Guest name
- `email: string` - Contact email
- `phone: string` - Contact phone
- `idNumber: string` - Government ID number
- `loyaltyPoints: number` - Loyalty program points

**Methods:**

- `getGuestInfo(): string` - Returns guest information
- `addLoyaltyPoints(points: number): void` - Adds loyalty points
- `getDiscountRate(): number` - Returns discount based on loyalty tier:
  - 1000+ points: 20% discount
  - 500+ points: 15% discount
  - 100+ points: 10% discount
  - Default: 5% discount

### 5. **Service.ts** (implements IChargeable)

Represents additional hotel services (room service, spa, laundry, etc.).

**Properties:**

- `serviceId: string` - Unique service identifier
- `name: string` - Service name
- `price: number` - Service cost
- `description: string` - Service details

**Methods:**

- `getPrice(): number` - Returns service price
- `getDescription(): string` - Returns service details

### 6. **Reservation.ts**

Represents a hotel reservation combining guest, room, and services.

**Properties:**

- `reservationId: string` - Unique reservation identifier
- `guest: Guest` - Associated guest
- `room: Room` - Reserved room
- `checkInDate: Date` - Check-in date
- `checkOutDate: Date` - Check-out date
- `status: ReservationStatus` - Current reservation status
- `services: Service[]` - Additional services ordered
- `totalGuests: number` - Number of guests

**Methods:**

- `getNumberOfNights(): number` - Calculates stay duration
- `getRoomCost(): number` - Returns total room cost (price × nights)
- `getServicesCost(): number` - Sums all service costs
- `getTotal(): number` - Returns total reservation cost
- `addService(service: Service): void` - Adds a service to reservation
- `checkIn(): void` - Marks guest as checked in, room as occupied
- `checkOut(): void` - Marks guest as checked out
- `cancel(): void` - Cancels reservation, frees room

### 7. **Hotel.ts**

Main hotel management class controlling all operations.

**Properties:**

- `hotelName: string` - Hotel name
- `address: string` - Hotel address
- `rooms: Room[]` - Collection of rooms
- `reservations: Reservation[]` - Collection of reservations
- `guests: Guest[]` - Collection of registered guests
- `availableServices: Service[]` - Available services

**Methods:**

- `addRoom(room): void` - Registers a new room
- `registerGuest(guest): void` - Registers a new guest
- `addService(service): void` - Adds available service
- `getAvailableRooms(checkIn, checkOut): Room[]` - Finds available rooms for dates
- `getAvailableRoomsByType(type, checkIn, checkOut): Room[]` - Filters by type
- `createReservation(guest, room, checkIn, checkOut, guests): Reservation` - Creates new reservation
- `cancelReservation(reservationId): void` - Cancels reservation
- `checkInGuest(reservationId): void` - Processes check-in
- `checkOutGuest(reservationId): void` - Processes check-out
- `getReservationsByGuest(guestId): Reservation[]` - Retrieves guest's reservations
- `getCurrentOccupancy(): number` - Returns occupancy percentage
- `getRevenue(startDate, endDate): number` - Calculates revenue for period
- `displayHotelStatus(): string` - Shows comprehensive hotel overview

## Design Patterns

### Polymorphism with IChargeable

Both `Room` and `Service` implement `IChargeable`, allowing unified billing:

```typescript
const items: IChargeable[] = [room, service1, service2];
const total = items.reduce((sum, item) => sum + item.getPrice(), 0);
```

### Composition

- `Reservation` contains `Guest`, `Room`, and `Service[]`
- `Hotel` manages multiple `Room`, `Reservation`, `Guest`, and `Service` objects

## Usage Example

```typescript
// Create hotel
const hotel = new Hotel("Grand Hotel", "123 Main Street");

// Add rooms
const room = new Room("101", RoomType.Double, RoomStatus.Available, 1, 150, 2, [
  "WiFi",
  "AC",
]);
hotel.addRoom(room);

// Register guest
const guest = new Guest(
  "G001",
  "John Doe",
  "john@example.com",
  "555-1234",
  "ID123",
  0,
);
hotel.registerGuest(guest);

// Add services
const service = new Service("S001", "Spa", 50, "Full body massage");
hotel.addService(service);

// Create reservation
const reservation = hotel.createReservation(
  guest,
  room,
  new Date(2026, 1, 20),
  new Date(2026, 1, 23),
  2,
);

// Add service to reservation
reservation.addService(service);

// Check in
hotel.checkInGuest(reservation.reservationId);

// Display status
console.log(hotel.displayHotelStatus());

// Get revenue
const revenue = hotel.getRevenue(new Date(2026, 1, 1), new Date(2026, 1, 28));
console.log(`Monthly Revenue: $${revenue}`);
```

## Features

✅ Room management with availability checking
✅ Guest registration with loyalty program
✅ Flexible reservation system with services
✅ Polymorphic billing with IChargeable
✅ Occupancy tracking
✅ Revenue calculations
✅ Date-based availability filtering
✅ Room type filtering
