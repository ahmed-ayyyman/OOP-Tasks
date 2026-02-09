export abstract class Animal {
  constructor(
    public animalId: string,
    public name: string,
    public species: string,
    public age: number,
    public healthStatus: string,
    public dailyFoodCost: number,
  ) {}

  abstract makeSound(): string;

  abstract getHabitat(): string;

  getAnimalInfo(): string {
    return `
Animal ID     : ${this.animalId}
Name          : ${this.name}
Species       : ${this.species}
Age           : ${this.age} years
Health        : ${this.healthStatus}
Daily Food Cost: $${this.dailyFoodCost.toFixed(2)}
    `.trim();
  }
  calculateWeeklyCost(): number {
    return this.dailyFoodCost * 7;
  }
}
