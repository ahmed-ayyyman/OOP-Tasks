import { Customer } from "./Customer";
import { Vehicle } from "./Vehicle";
export class Rental {
    rentalId: string;
    customer: Customer;
    vehicle: Vehicle;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
    constructor(rentalId: string, customer: Customer, vehicle: Vehicle, startDate: Date, endDate: Date, isActive: boolean) {
        this.rentalId = rentalId;
        this.customer = customer;
        this.vehicle = vehicle;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isActive = isActive;
    }
    getRentalDuration(): number {
        const durationDays = (this.endDate.getTime() - this.startDate.getTime()) / (1000 * 60 * 60 * 24);
        return durationDays
    }
    getTotalCost(): number {

        return this.getRentalDuration() * this.vehicle.dailyRate
    }
    completeRental(): string {
        this.isActive = false
        this.vehicle.isAvailable = true
        return `Rental is completed and ${this.vehicle.vehicleId} returned successfully`;
    }
    getRentalInfo(): string {
        const status = this.isActive ? "Active" : "Completed";
        const duration = this.getRentalDuration();
        const totalCost = this.getTotalCost();
        return `Rental ID: ${this.rentalId}, Customer: ${this.customer.name} (ID: ${this.customer.customerId}), Vehicle: ${this.vehicle.make} ${this.vehicle.model} (ID: ${this.vehicle.vehicleId}), Start Date: ${this.startDate.toLocaleDateString()}, End Date: ${this.endDate.toLocaleDateString()}, Duration: ${duration.toFixed(1)} days, Total Cost: $${totalCost.toFixed(2)}, Status: ${status}`;
    }
}