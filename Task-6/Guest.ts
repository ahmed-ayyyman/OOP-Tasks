export class Guest {
  constructor(
    public guestId: string,
    public name: string,
    public email: string,
    public phone: string,
    public idNumber: string,
    public loyaltyPoints: number,
  ) {}
  getGuestInfo(): string {
    return `Guest ID: ${this.guestId}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}, ID Number: ${this.idNumber}, Loyalty Points: ${this.loyaltyPoints}`;
  }
  addLoyaltyPoints(points: number): void {
    this.loyaltyPoints += points;
  }
  getDiscountRate(): number {
    if (this.loyaltyPoints >= 1000) return 0.2; // 20% discount
    if (this.loyaltyPoints >= 500) return 0.15; // 15% discount
    if (this.loyaltyPoints >= 100) return 0.1; // 10% discount
    return 0.05; // 5% discount
  }
}
