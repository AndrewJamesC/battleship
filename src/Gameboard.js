import Ship from "./ship";

class Gameboard {
  constructor() {
    this.ships = {
      battleship: new Ship("battleship", 4),
      carrier: new Ship("carrier", 5),
      cruiser: new Ship("cruiser", 3),
      submarine: new Ship("submarine", 3),
      destroyer: new Ship("destroyer", 2),
    };
    this.miss = [];
  }

  addShips(shipName, x, y, direction) {
    const ship = this.ships[shipName];
    const arrayRange = (start, stop, step) =>
      Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
      );

    for (const eachShip in this.ships) {
      if (!this.ships[eachShip].x) {
        this.ships[eachShip].x = [];
      }
      if (!this.ships[eachShip].y) {
        this.ships[eachShip].y = [];
      }
      if (
        this.ships[eachShip].x.includes(x) &&
        this.ships[eachShip].y.includes(y)
      ) {
        console.log("A ship has already been placed here");
        return;
      }
    }

    if (direction === "horizontal" && x + ship.shipLength <= 10 && y <= 10) {
      ship.x = arrayRange(x, x + ship.shipLength - 1, 1);
      ship.y = [y];
    } else if (
      direction === "vertical" &&
      x <= 10 &&
      y + ship.shipLength <= 10
    ) {
      ship.x = [x];
      ship.y = arrayRange(y, y + ship.shipLength - 1, 1);
    }
  }

  // addShips(shipsName, x, y, direction) {
  //   const ship = this.ships[shipsName.type];

  //   if (
  //     (direction === "horizontal" && x + shipsName.length <= 10 && y <= 10) ||
  //     (direction === "vertical" && x <= 10 && y + shipsName.length <= 10)
  //   ) {
  //     ship.x = [x];
  //     ship.y = [y];

  //     for (let i = 1; i < shipsName.length; i++) {
  //       ship.x.push(direction === "horizontal" ? x + i : x);
  //       ship.y.push(direction === "vertical" ? y + i : y);
  //     }
  //   }
  // }

  receiveAttack(x, y) {
    let hit = false;

    for (const ship in this.ships) {
      if (this.ships[ship].x.includes(x) && this.ships[ship].y.includes(y)) {
        hit = true;
        this.ships[ship].hit();
        this.ships[ship].isSunk();
        break;
      }
    }

    if (!hit) {
      this.miss.push([x, y]);
    }
  }
}

export default Gameboard;
