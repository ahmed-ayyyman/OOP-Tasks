import { Vehicle } from "./Vehicle";
import { Rental } from "./Rental";
import { Customer } from "./Customer";

export class RentalAgency {
    agencyName: string;
    vehicles: Vehicle[];
    customers: Customer[];
    rentals: Rental[];
    constructor(agencyName: string) {
        this.agencyName = agencyName;
        this.vehicles = [];
        this.customers = [];
        this.rentals = [];
    }
    addVehicle(vehicle: Vehicle): void {
        this.vehicles.push(vehicle);
    }
    registerCustomer(customer: Customer): void {
        this.customers.push(customer)
    }
    getAvailableVehicles(): Vehicle[] {
        return this.vehicles.filter(vehicle => vehicle.isAvailable);
    }
    createRental(customer: Customer, vehicle: Vehicle, days: number): Rental | null {
        // Ensure customer and vehicle are registered
        if (!this.customers.includes(customer)) {
            this.registerCustomer(customer);
        }
        if (!this.vehicles.includes(vehicle)) {
            this.addVehicle(vehicle);
        }

        // Check if vehicle is available
        if (!vehicle.isAvailable) {
            console.log(`Vehicle ${vehicle.vehicleId} is not available for rental.`);
            return null;
        }

        // Create rental dates
        const startDate = new Date();
        const endDate = new Date();
        endDate.setDate(startDate.getDate() + days);

        // Generate rental ID
        const rentalId = `RENT-${Date.now()}-${this.rentals.length + 1}`;

        // Create rental
        const rental = new Rental(rentalId, customer, vehicle, startDate, endDate, true);

        // Mark vehicle as unavailable
        vehicle.isAvailable = false;

        // Add rental to rentals array
        this.rentals.push(rental);

        return rental;
    }
    completeRental(rentalId: string): string {
        const rental = this.rentals.find(r => r.rentalId === rentalId);
        if (!rental) {
            return `Rental with ID ${rentalId} not found.`;
        }
        rental.isActive = false;
        rental.vehicle.isAvailable = true;
        return `Rental is completed and ${rental.vehicle.vehicleId} returned successfully`;
    }
    getActiveRentals(): Rental[] {
        return this.rentals.filter(r => r.isActive === true);
    }
    getCustomerRentals(customerId: string): Rental[] {
        return this.rentals.filter(rental => rental.customer.customerId === customerId);
    }
    displayFleet(): void {
        console.log(`\n=== Fleet Status for ${this.agencyName} ===`);
        if (this.vehicles.length === 0) {
            console.log("No vehicles in the fleet.");
        } else {
            this.vehicles.forEach((vehicle, index) => {
                const status = vehicle.isAvailable ? "Available" : "Rented";
                console.log(`${index + 1}. ${vehicle.getVehicleInfo()} - Status: ${status}`);
            });
        }
        console.log("==========================================\n");
    }
}