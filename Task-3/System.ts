import { Vehicle } from "./Vehicle";
import { Rental } from "./Rental";
import { Customer } from "./Customer";
import { RentalAgency } from "./RentalAgency";

// Create rental agency
const agency = new RentalAgency("Prime Car Rentals");

// Add vehicles to fleet
const car1 = new Vehicle("V001", "Toyota", "Camry", 2022, 45.00, true);
const car2 = new Vehicle("V002", "Honda", "Accord", 2023, 50.00, true);
const car3 = new Vehicle("V003", "Tesla", "Model 3", 2023, 85.00, true);

agency.addVehicle(car1);
agency.addVehicle(car2);
agency.addVehicle(car3);

// Register customers
const customer1 = new Customer("C001", "Alice Johnson", "555-0123",
    "alice@email.com", "DL123456");
const customer2 = new Customer("C002", "Bob Smith", "555-0456",
    "bob@email.com", "DL789012");

agency.registerCustomer(customer1);
agency.registerCustomer(customer2);

// Display available vehicles
agency.displayFleet();

// Create rentals
const rental1 = agency.createRental(customer1, car1, 5);
if (rental1) {
    console.log("Rental created: " + rental1.rentalId);
    console.log("Total Cost: $" + rental1.getTotalCost());
}

const rental2 = agency.createRental(customer2, car3, 3);
if (rental2) {
    console.log("Rental created: " + rental2.rentalId);
    console.log("Total Cost: $" + rental2.getTotalCost());
}

// Display available vehicles after rentals
console.log("After rentals:");
agency.displayFleet();

// Complete a rental
if (rental1) {
    const result = agency.completeRental(rental1.rentalId);
    console.log(result);
}

// Display customer rental history
const customerRentals = agency.getCustomerRentals("C001");
console.log("Alice's rental history: " + customerRentals.length + " rental(s)");