import { Animal } from "../Animal";

export class Parrot extends Animal {
  constructor(
    public animalId: string,
    public name: string,
    public species: string,
    public age: number,
    public healthStatus: string,
    public dailyFoodCost: number,
    public canTalk: boolean,
    public vocabulary: string[],
  ) {
    super(animalId, name, species, age, healthStatus, dailyFoodCost);
  }

  makeSound(): string {
    return "Squawk!";
  }

  getHabitat(): string {
    return "Tropical Forest";
  }

  speak(): string {
    if (this.vocabulary.length === 0) {
      return "...";
    }
    const randomIndex = Math.floor(Math.random() * this.vocabulary.length);
    return this.vocabulary[randomIndex];
  }
}
