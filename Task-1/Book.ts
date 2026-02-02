export class Book {
  title: string;
  author: string;
  isbn: string;
  isAvaliable: boolean;

  constructor(
    title: string,
    author: string,
    isbn: string,
    isAvaliable: boolean,
  ) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvaliable = isAvaliable;
  }
  getInfo(): string {
    const availability = this.isAvaliable ? "Available" : "Not Available";
    return `${this.title} by ${this.author} (ISBN: ${this.isbn}) - ${availability}`;
  }
  borrow(): void {
    this.isAvaliable = false;
  }
  returnBook(): void {
    this.isAvaliable = true;
  }
}
