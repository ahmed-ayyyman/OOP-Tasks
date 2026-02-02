import { Book } from "./Book";

export class Member{
    name: string;
    memberId: string;
    borrowedBooks: Book[] = [];
      constructor(
    name: string,
    memberId: string,
    borrowedBooks: Book[] = []
  ) {
          this.name = name;
          this.memberId = memberId;
          this.borrowedBooks = borrowedBooks;
    }
    getInfo():string {
        const bookCount = this.borrowedBooks.length;
        return `${this.name} with Id:${this.memberId} borrowed ${bookCount} book(s)`;
    }
    borrowBook(book: Book):void {
        this.borrowedBooks.push(book);
        book.borrow(); 
    }
    returnBook(book: Book): void{
        const index = this.borrowedBooks.indexOf(book);
        if (index > -1) {
            this.borrowedBooks.splice(index, 1);
        }
        book.returnBook();
    }
}