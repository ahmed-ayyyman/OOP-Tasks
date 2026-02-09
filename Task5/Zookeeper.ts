import { Animal } from "./Animal";
type animalType = "Mammal" | "Bird" | "Reptile";
export class Zookeeper {
  constructor(
    public employeeId: string,
    public name: string,
    public specialization: animalType,
    public assignedAnimals: Animal[],
  ) {}
  feedAnimal(animal: Animal): string {
    return `${animal.name} has been fed`;
  }
  checkHealth(animal: Animal): string {
    return animal.healthStatus;
  }
  getWorkLoad(): number {
    return this.assignedAnimals.length;
  }
}
