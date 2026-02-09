import { Animal } from "../Animal";

export class Eagle extends Animal {
  constructor(
    public animalId: string,
    public name: string,
    public species: string,
    public age: number,
    public healthStatus: string,
    public dailyFoodCost: number,
    public wingspan: number,
    public diveSpeed: number,
  ) {
    super(animalId, name, species, age, healthStatus, dailyFoodCost);
  }

  makeSound(): string {
    return "Screech!";
  }

  getHabitat(): string {
    return "Mountains";
  }
}
