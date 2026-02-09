import { Animal } from "../Animal";

export class Crocodile extends Animal {
  constructor(
    public animalId: string,
    public name: string,
    public species: string,
    public age: number,
    public healthStatus: string,
    public dailyFoodCost: number,
    public jawStrength: number,
    public weight: number,
  ) {
    super(animalId, name, species, age, healthStatus, dailyFoodCost);
  }

  makeSound(): string {
    return "Growl!";
  }

  getHabitat(): string {
    return "Swamp";
  }
}
