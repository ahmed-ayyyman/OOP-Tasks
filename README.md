# OOP‑Tasks

This repository contains a set of **Object‑Oriented Programming (OOP) tasks implemented in TypeScript**. Each task focuses on designing and implementing classes, interfaces, methods, and behaviors using OOP principles such as encapsulation, abstraction, composition, and more.

---

## 📌 Overview

The goal of this project is to practice core OOP concepts using TypeScript, including:

- Class design and inheritance  
- Interfaces and type safety  
- Encapsulation of data and behavior  
- Working with collections of objects  
- Designing reusable, modular components

The project structure includes solutions to several tasks that incrementally build a small OOP‑based application using TypeScript.

---

## 🗂 Repository Structure

OOP‑Tasks/
├── Task‑1/ # First task implementation
├── Task‑2/ # Second task implementation
├── Task‑3/ # Third task implementation
└── README.md # This file

yaml
Copy code

Each task folder contains source TypeScript files demonstrating an OOP solution.

---

## 🛠 Technologies Used

- **TypeScript** — for type‑safe object‑oriented code  
- Familiar OOP concepts such as classes, constructors, methods, and collections

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** (or `pnpm`, `yarn`) installed.

### Install Dependencies

```bash
npm install
# or
yarn
Compile/Run
Compile the TypeScript code:

bash
Copy code
npx tsc
Run the compiled JavaScript:

bash
Copy code
node dist/index.js
(Adapt path to match your actual build/output folder.)

🧠 OOP Concepts Practiced
This repository demonstrates:

Class definitions & constructors

Encapsulation through access modifiers

Lists/Arrays of objects

Instance methods for business logic

Type safety with interfaces and union types

✨ Examples
Here is an example of a class pattern you might find in this repository:

ts
Copy code
export type OrderStatus =
  | "Pending"
  | "Preparing"
  | "Ready"
  | "Served"
  | "Completed";

export class Order {
  constructor(
    public orderId: string,
    public tableNumber: number,
    public orderItems: OrderItem[] = [],
    public orderTime: Date,
    public status: OrderStatus,
  ) {}
}
This demonstrates how to define a class with typed fields and a constrained status type.

🤝 Contributions
Contributions are welcome!

If you have another OOP task or improvement, feel free to:

Fork this repository

Create a new branch

Add your solution

Submit a pull request

📄 License
This project is open‑source and free to use for learning and practice.

Happy coding! 🚀
Repository: OOP‑Tasks by ahmed‑ayyyman
Language: TypeScript 
GitHub

yaml
Copy code

---

If you want, I can **customize it further** by adding:

✅ a section with all tasks explained  
✅ code examples from each task  
✅ badges (build, license, TypeScript)  
✅ contribution guidelines  

Just tell me what you want!
::contentReference[oaicite:1]{index=1}
