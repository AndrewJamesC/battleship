import { battleship } from ".";

class Gameboard {
  constructor() {
    this.ships = {};
  }

  addShips(shipsName, x, y, direction) {
    if (shipsName.length - 1 + x <= 10 && shipsName.length - 1 + y <= 10) {
      if (direction === "horizontal") {
        this.ships[shipsName.type] = {
          x: [x],
          y: [y],
          direction: direction,
        };
        let count = x + 1;
        while (count <= x + shipsName.length - 1) {
          this.ships[shipsName.type].x.push(count);

          count++;
        }
      } else {
        this.ships[shipsName.type] = {
          x: [x],
          y: [y],
          direction: direction,
        };
        let count = y + 1;
        while (count <= y + shipsName.length - 1) {
          this.ships[shipsName.type].y.push(count);
          count++;
        }
      }
    }
  }
  receiveAttack(x, y) {
    for (const ship in this.ships) {
      if (this.ships[ship].x.includes(x) && this.ships[ship].x.includes(y)) {
        switch (ship) {
          case "carrier":
            carrier.hit();
            break;
          case "battleship":
            battleship.hit();
            break;
          case "cruiser":
            cruiser.hit();
            break;
          case "submarine":
            submarine.hit();
            break;
          case "destroyer":
            destroyer.hit();
            break;
        }
      }
    }
  }
}
export default Gameboard;
