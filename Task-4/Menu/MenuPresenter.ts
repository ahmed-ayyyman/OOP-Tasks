import { Menu } from "./Menu";

export class MenuPrinter {
  static print(menu: Menu) {
    console.log(`${menu.restaurantName} Menu:`);

    menu.getAllItems().forEach((item) => {
      console.log(item.toString());
    });
  }
}
