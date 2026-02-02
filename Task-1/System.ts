// Import the necessary classes (assuming this is in a file like System.ts)
import { Book } from "./Book";
import { Member } from "./Member";
import { Library } from "./Library";

// Create books (your Book constructor requires 4 arguments: title, author, isbn, isAvailable)
const book1 = new Book("Design Patterns", "Gang of Four", "978-0201633610", true);
const book2 = new Book("Clean Code", "Robert Martin", "978-0132350884", true);
const book3 = new Book("The Pragmatic Programmer", "Andy Hunt", "978-0135957059", true);

// Create an empty array for books and members to pass to the Library constructor
const initialBooks: Book[] = [];
const initialMembers: Member[] = [];

// Create the library (your Library constructor requires 3 arguments: name, books, members)
const library = new Library("City Central Library", initialBooks, initialMembers);

// Add books to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Create members (your Member constructor allows 2 or 3 arguments, with borrowedBooks optional)
const member1 = new Member("Alice Johnson", "M001");
const member2 = new Member("Bob Smith", "M002");

// Register members
library.registerMember(member1);
library.registerMember(member2);

// Display available books
library.displayAvaliableBooks();

// Member borrows a book
library.lendBook(member1, "978-0201633610");

// Display available books again
library.displayAvaliableBooks();

// Member returns a book
library.receiveBook(member1, "978-0201633610");