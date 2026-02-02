export class Vehicle {
    vehicleId: string;
    make: string;
    model: string;
    year: number;
    dailyRate: number;
    isAvailable: boolean;
    constructor(vehicleId: string, make: string, model: string, year: number, dailyRate: number, isAvailable: boolean) {
        this.vehicleId = vehicleId;
        this.make = make;
        this.model = model;
        this.year = year;
        this.dailyRate = dailyRate;
        this.isAvailable = isAvailable;
    }
    getVehicleInfo(): string {
        return `Vehicle ID: ${this.vehicleId}, Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Daily Rate: ${this.dailyRate}, Available: ${this.isAvailable}`
    }
    rent(): string {
        if (!this.isAvailable) {
            return "This vehicle is unavailable right now";
        }

        this.isAvailable = false;
        return `${this.vehicleId} rented successfully`;
    }
    returnVehicle(): string {
        this.isAvailable = true
        return `${this.vehicleId} returned successfully`;
    }
    calculateRentalCost(days: number): number {
        return days * this.dailyRate
    }
}