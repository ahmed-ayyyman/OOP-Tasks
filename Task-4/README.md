# Task 4 — Restaurant Ordering System 🍽️

**Short description**
A small TypeScript implementation of a restaurant ordering system. It contains models for menus, menu items, orders, order items, and a `Restaurant` that ties them together.

---

## Files

- `Menu.ts` — Menu container and helper methods (add/remove/find items).
- `MenuItem.ts` — Represents a single menu item (name, price, etc.).
- `Order.ts` — Represents a customer order (list of ordered items, totals).
- `OrderItem.ts` — An item within an order (reference to `MenuItem` + quantity).
- `Restaurant.ts` — High-level logic that ties menus and orders together.

---

## Requirements ✅

- Node.js (v14+ recommended)
- npm
- TypeScript (dev dependency)

---

## Quick setup

```bash
# from the repository root
cd Task-4

# Initialize (if you don't already have package.json)
npm init -y

# Install dev tools
npm install --save-dev typescript ts-node @types/node

# Create tsconfig if needed
npx tsc --init
```

Notes:

- The task files are in the `Task-4` folder (not inside `src` by default). Adjust commands/paths if you move files.

---

## Build & Run

- To compile to JavaScript:

```bash
npx tsc
# compiled files will be in the folder set by your tsconfig (default: same dir or `dist` if configured)
```

- To run a quick demo without compiling:

```bash
# create a small demo file (see example below) and run it directly
npx ts-node demo.ts
```

> ⚠️ The repository does not include a `demo.ts` runner by default. Create one (see example) or add a lightweight `System.ts` that exercises the code.

---

## Example usage (TypeScript)

Adjust method names to the actual implementation if needed.

```ts
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { Order } from "./Order";
import { OrderItem } from "./OrderItem";
import { Restaurant } from "./Restaurant";

const menu = new Menu();
menu.addItem(new MenuItem("Burger", 5.99));
menu.addItem(new MenuItem("Fries", 2.49));

const restaurant = new Restaurant(menu);

const order = new Order();
const burger = menu.findItemByName("Burger");
if (burger) order.addItem(new OrderItem(burger, 2));

console.log("Order total:", order.total());
```

---

## Tests

No tests are included by default. Add tests with your preferred framework (Jest, Mocha, etc.).

---

## Contributing & License

- Contributions: open a PR with small, focused changes.
- License: Add a license file if you plan to share this project publicly.

---

If you want, I can add a `demo.ts` runner file that shows the code in action. 🔧
