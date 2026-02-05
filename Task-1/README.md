# Task 1 — Library Management System 📚

**Short description**
A small TypeScript implementation of a library management system. It contains models for books, a library to hold them, members that borrow books, and a simple `System.ts` to tie behavior together.

---

## Files

- `Book.ts` — Represents a book (title, author, ISBN, availability).
- `Library.ts` — Holds a collection of books and exposes methods to add, remove, search, and lend books.
- `Member.ts` — Represents a library member (name, id, borrowed books list).
- `System.ts` — A lightweight runner that shows how the classes interact.

---

## Requirements ✅

- Node.js (v14+ recommended)
- npm
- TypeScript (dev dependency)

---

## Quick setup

```bash
# from the repository root
cd Task-1

# Initialize if needed
npm init -y
npm install --save-dev typescript ts-node @types/node
npx tsc --init
```

---

## Build & Run

- Compile with `npx tsc`.
- Run a quick demo without compiling using `npx ts-node System.ts` (or `demo.ts` if you create one).

---

## Example usage (TypeScript)

```ts
import { Library } from "./Library";
import { Book } from "./Book";
import { Member } from "./Member";

const lib = new Library();
lib.addBook(new Book("1984", "George Orwell", "9780451524935"));
lib.addBook(new Book("Brave New World", "Aldous Huxley", "9780060850524"));

const member = new Member("Alice");

const book = lib.findByTitle("1984");
if (book) lib.lendBook(book.isbn, member.id);

console.log("Member borrowed:", member.borrowedBooks.length);
```

---

## Tests

No tests included by default. Add tests with Jest or another framework.

---

## Contributing & License

- Open a PR for improvements. Add a LICENSE if sharing publicly.

---

I can add a `System.ts` demo runner for `Task-1` if you'd like. 🔧
