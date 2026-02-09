import { Animal } from "../Animal";

export class Snake extends Animal {
  constructor(
    public animalId: string,
    public name: string,
    public species: string,
    public age: number,
    public healthStatus: string,
    public dailyFoodCost: number,
    public isVenomous: boolean,
    public length: number,
  ) {
    super(animalId, name, species, age, healthStatus, dailyFoodCost);
  }

  makeSound(): string {
    return "Hiss!";
  }

  getHabitat(): string {
    return "Desert";
  }
}
