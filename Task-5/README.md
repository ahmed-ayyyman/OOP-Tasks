# Zoo OOP Task

Small TypeScript project demonstrating basic OOP for a zoo management system. Includes base `Animal` class, several animal subclasses (mammals, birds, reptiles), a `Zookeeper` class, and a `Zoo` class with utility methods.

## Project Structure

- `Animal.ts` — abstract base class
- `Mammal-Classes/`, `Bird-Classes/`, `Reptile-Classes/` — animal subclasses
- `Zookeeper.ts` — zookeeper class
- `Zoo.ts` — zoo class and management methods
- `index.ts` — example/test harness that builds a zoo and demonstrates features

## Run

1. Install dependencies (recommended):

```bash
npm init -y
npm install typescript @types/node --save-dev
npx tsc --init
```

2. Compile TypeScript to JavaScript:

```bash
npx tsc
```

3. Run the example (after compile):

```bash
node index.js
```

Alternative (run without compiling):

```bash
npx ts-node index.ts
```

## Notes

- `index.ts` contains a small test harness that creates animals, zookeepers, assigns animals, and prints statistics.
- Adjust `tsconfig.json` `outDir` or module target if you prefer output in a `dist/` folder.
