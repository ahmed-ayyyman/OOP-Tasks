import { Animal } from "../Animal";

export class Lion extends Animal {
  constructor(
    public animalId: string,
    public name: string,
    public species: string,
    public age: number,
    public healthStatus: string,
    public dailyFoodCost: number,
    public maneColor: string,
    public prideSize: number,
  ) {
    super(animalId, name, species, age, healthStatus, dailyFoodCost);
  }
  makeSound(): string {
    return "Roar";
  }
  getHabitat(): string {
    return "Savanna";
  }
}
