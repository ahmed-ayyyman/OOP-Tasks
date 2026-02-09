import { Animal } from "./Animal";
import { Zookeeper } from "./Zookeeper";

export class Zoo {
  constructor(
    public zooName: string,
    public animals: Animal[],
    public zooKeepers: Zookeeper[],
  ) {}
  addAnimal(animal: Animal) {
    this.animals.push(animal);
  }
  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => a !== animal);
  }
  assignAnimalToKeeper(animal: Animal, keeper: Zookeeper) {
    keeper.assignedAnimals.push(animal);
  }
  getAnimalsByHabitat(habitat: string) {
    return this.animals.filter((animal) => animal.getHabitat() === habitat);
  }
  getAnimalsBySpecies(species: string) {
    return this.animals.filter((animal) => animal.species === species);
  }
  calculateTotalWeeklyCost(): number {
    return this.animals.reduce(
      (total, animal) => total + animal.calculateWeeklyCost(),
      0,
    );
  }
  displayAllAnimals(): string {
    return this.animals
      .map(
        (animal) => `${animal.name} (${animal.species}): ${animal.makeSound()}`,
      )
      .join("\n");
  }
  getZooStatistics(): string {
    return `
Zoo Name: ${this.zooName}
Total Animals: ${this.animals.length}
Total Zookeepers: ${this.zooKeepers.length}
Weekly Maintenance Cost: $${this.calculateTotalWeeklyCost().toFixed(2)}
    `.trim();
  }
}
