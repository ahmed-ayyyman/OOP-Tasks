import { Animal } from "../Animal";
export class Monkey extends Animal {
  constructor(
    public animalId: string,
    public name: string,
    public species: string,
    public age: number,
    public healthStatus: string,
    public dailyFoodCost: number,
    public tailLength: number,
    public favouriteFood: string,
  ) {
    super(animalId, name, species, age, healthStatus, dailyFoodCost);
  }
  makeSound(): string {
    return "Ooh ooh ah ah!!";
  }
  getHabitat(): string {
    return "Rainforest";
  }
}
