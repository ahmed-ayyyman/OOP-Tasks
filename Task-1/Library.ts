import { Book } from "./Book";
import { Member } from './Member';

export class Library{
    name: string;
    books: Book[] = [];
    member: Member[] = [];
    constructor(name: string, books: Book[], member: Member[]) {
        this.name = name;
        this.books = books;
        this.member = member;
    }
    addBook(book: Book): void {
        this.books.push(book);
    }
    registerMember(member: Member): void{
        this.member.push(member);
    }
    lendBook(member: Member, isbn: string): void {
        const book = this.books.find(b=>b.isbn===isbn);
        if (book && book.isAvaliable) {
            member.borrowBook(book);
        }
        else {
            console.log`This book is not avaliable`;
        }
    }
    receiveBook(member: Member, isbn: string): void{
        const book = this.books.find(b => b.isbn === isbn);
        if (book) {
            member.returnBook(book)
        }
    }
    displayAvaliableBooks() {
    const availableBooks = this.books.filter(book => book.isAvaliable);
    if (availableBooks.length === 0) {
        console.log("No books are currently available.");
    } else {
        console.log("Available Books:");
        availableBooks.forEach(book => {
            console.log(book.getInfo());
        });
    }
    }
}

