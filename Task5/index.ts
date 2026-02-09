import { Zoo } from "./Zoo";
import { Lion } from "./Mammal-Classes/Lion";
import { Elephant } from "./Mammal-Classes/Elephant";
import { Parrot } from "./Bird-Classes/Parrot";
import { Eagle } from "./Bird-Classes/Eagle";
import { Snake } from "./Reptile-Classes/Snake";
import { Zookeeper } from "./Zookeeper";

// Create zoo
const zoo = new Zoo("Safari World", [], []);

// Create animals
const lion = new Lion(
  "A001",
  "Simba",
  "African Lion",
  5,
  "Healthy",
  50.0,
  "Golden",
  3,
);
const elephant = new Elephant(
  "A002",
  "Dumbo",
  "African Elephant",
  15,
  "Healthy",
  80.0,
  2.5,
  5000,
);
const parrot = new Parrot(
  "A003",
  "Polly",
  "Macaw",
  8,
  "Healthy",
  10.0,
  true,
  [],
);
parrot.vocabulary.push("Hello");
parrot.vocabulary.push("Goodbye");
parrot.vocabulary.push("Pretty bird");
const snake = new Snake(
  "A004",
  "Kaa",
  "Python",
  10,
  "Healthy",
  15.0,
  true,
  4.5,
);
const eagle = new Eagle(
  "A005",
  "Freedom",
  "Bald Eagle",
  6,
  "Healthy",
  20.0,
  2.3,
  320,
);

// Add animals to zoo
zoo.addAnimal(lion);
zoo.addAnimal(elephant);
zoo.addAnimal(parrot);
zoo.addAnimal(snake);
zoo.addAnimal(eagle);

// Create zookeepers
const keeper1 = new Zookeeper("K001", "John Smith", "Mammal", []);
const keeper2 = new Zookeeper("K002", "Jane Doe", "Bird", []);

zoo.zooKeepers.push(keeper1);
zoo.zooKeepers.push(keeper2);

// Assign animals to keepers
zoo.assignAnimalToKeeper(lion, keeper1);
zoo.assignAnimalToKeeper(elephant, keeper1);
zoo.assignAnimalToKeeper(parrot, keeper2);
zoo.assignAnimalToKeeper(snake, keeper2);
zoo.assignAnimalToKeeper(eagle, keeper2);

// Display all animals
console.log("=== All Animals ===");
console.log(zoo.displayAllAnimals());

// Demonstrate polymorphism
console.log("\n=== Animal Sounds ===");
for (const animal of zoo.animals) {
  console.log(`${animal.name} says: ${animal.makeSound()}`);
}

// Get animals by habitat
console.log("\n=== Savanna Animals ===");
const savannaAnimals = zoo.getAnimalsByHabitat("Savanna");
for (const a of savannaAnimals) {
  console.log(`- ${a.name} (${a.species})`);
}

// Calculate costs
const weeklyCost = zoo.calculateTotalWeeklyCost();
console.log(`\nTotal Weekly Cost: $${weeklyCost.toFixed(2)}`);

// Zookeeper work
console.log("\n=== Zookeeper Activities ===");
console.log(keeper1.feedAnimal(lion));
console.log(keeper1.checkHealth(elephant));
console.log(`${keeper1.name}'s workload: ${keeper1.getWorkLoad()} animals`);

// Zoo statistics
console.log("\n=== Zoo Statistics ===");
console.log(zoo.getZooStatistics());
