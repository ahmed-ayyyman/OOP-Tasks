# Task 2 — Grade Book System 🧮

**Short description**
A TypeScript implementation of a simple gradebook. It contains models for students, a gradebook to manage grades, and a `System.ts` to demonstrate basic operations.

---

## Files

- `GradeBook.ts` — Manages students and their grades; computes averages and summaries.
- `Student.ts` — Represents a student (name, id, grades list).
- `System.ts` — Demonstrates creating students, adding grades, and computing results.

---

## Requirements ✅

- Node.js (v14+ recommended)
- npm
- TypeScript (dev dependency)

---

## Quick setup

```bash
# from the repository root
cd Task-2

# Initialize if needed
npm init -y
npm install --save-dev typescript ts-node @types/node
npx tsc --init
```

---

## Build & Run

- Compile with `npx tsc`.
- Run a demo without compiling using `npx ts-node System.ts`.

---

## Example usage (TypeScript)

```ts
import { GradeBook } from "./GradeBook";
import { Student } from "./Student";

const gb = new GradeBook();
const s1 = new Student("Fatima");
const s2 = new Student("Omar");

gb.addStudent(s1);
gb.addStudent(s2);

gb.addGrade(s1.id, 87);
gb.addGrade(s1.id, 92);
gb.addGrade(s2.id, 75);

console.log("Average for Fatima:", gb.averageForStudent(s1.id));
console.log("Class average:", gb.classAverage());
```

---

## Tests

No tests included by default. Add tests with your preferred framework.

---

## Contributing & License

- Contributions welcome via PR. Add a license if publishing.

---

If you want, I can add a `System.ts` example file that runs a small gradebook scenario. 🔧
