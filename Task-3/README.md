# Task 3 — Rental Agency System 🚗

**Short description**
A small TypeScript implementation of a vehicle rental agency. It includes vehicles, customers, rentals, and a `RentalAgency` that coordinates rentals.

---

## Files

- `Vehicle.ts` — Represents a vehicle (make, model, plate, daily rate, availability).
- `Customer.ts` — Represents a customer (name, id, rental history).
- `Rental.ts` — Represents an active or past rental (vehicle, customer, dates, cost calculation).
- `RentalAgency.ts` — Manages inventory and rentals.
- `System.ts` — A sample runner that demonstrates renting and returning vehicles.

---

## Requirements ✅

- Node.js (v14+ recommended)
- npm
- TypeScript (dev dependency)

---

## Quick setup

```bash
# from the repository root
cd Task-3

# Initialize if needed
npm init -y
npm install --save-dev typescript ts-node @types/node
npx tsc --init
```

---

## Build & Run

- Compile with `npx tsc`.
- Run a demo without compiling using `npx ts-node System.ts`.

---

## Example usage (TypeScript)

```ts
import { RentalAgency } from "./RentalAgency";
import { Vehicle } from "./Vehicle";
import { Customer } from "./Customer";

const agency = new RentalAgency();
const car = new Vehicle("Toyota", "Corolla", "ABC-123", 45);
agency.addVehicle(car);

const customer = new Customer("Hassan");
const rental = agency.rentVehicle(car.plate, customer.id, 3); // 3 days

console.log("Rental cost:", rental?.totalCost());
```

---

## Tests

No tests included by default. Add tests with Jest or another framework.

---

## Contributing & License

- Contributions: open a PR. Add a license if needed.

---

I can add a `System.ts` demo runner for `Task-3` that demonstrates renting and returning a vehicle if you'd like. 🔧
