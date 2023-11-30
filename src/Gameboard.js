import { battleship } from ".";

class Gameboard {
  constructor() {
    this.ships = {};
    this.miss = [];
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
    let hit = false;
    for (const ship in this.ships) {
      if (this.ships[ship].x.includes(x) && this.ships[ship].x.includes(y)) {
        hit = true;
        switch (ship) {
          case "carrier":
            carrier.hit();
            carrier.isSunk();
            break;
          case "battleship":
            battleship.hit();
            battleship.isSunk();
            break;
          case "cruiser":
            cruiser.hit();
            cruiser.isSunk();
            break;
          case "submarine":
            submarine.hit();
            submarine.isSunk();
            break;
          case "destroyer":
            destroyer.hit();
            destroyer.isSunk();
            break;
        }
      }
    }
    if (!hit) {
      this.miss.push([x, y]);
    }
  }
}
export default Gameboard;
