import { Animal } from "../Animal";
export class Elephant extends Animal {
  constructor(
    public animalId: string,
    public name: string,
    public species: string,
    public age: number,
    public healthStatus: string,
    public dailyFoodCost: number,
    public tuskLength: number,
    public weight: number,
  ) {
    super(animalId, name, species, age, healthStatus, dailyFoodCost);
  }
  makeSound(): string {
    return "Trumpet!";
  }
  getHabitat(): string {
    return "Grassland";
  }
}
