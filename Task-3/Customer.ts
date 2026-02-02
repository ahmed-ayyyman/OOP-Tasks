export class Customer {
    customerId: string;
    name: string;
    phone: string;
    email: string;
    driversLicenseNumber: string;
    constructor(customerId: string, name: string, phone: string, email: string, driversLicenseNumber: string) {
        this.customerId = customerId;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.driversLicenseNumber = driversLicenseNumber;
    }
    getCustomerInfo() {
        return `Customer ID: ${this.customerId}, Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}, Driver's License: ${this.driversLicenseNumber}`;
    }
}