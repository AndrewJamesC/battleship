import Ship from "./ship";

class Gameboard {
  constructor() {
    this.ships = {};
    this.miss = [];
    this.battleship = new Ship("battleship", 4);
    this.carrier = new Ship("carrier", 5);
    this.cruiser = new Ship("cruiser", 3);
    this.submarine = new Ship("submarine", 3);
    this.destroyer = new Ship("destroyer", 2);

    this.ships = {
      battleship: this.battleship,
      carrier: this.carrier,
      cruiser: this.cruiser,
      submarine: this.submarine,
      destroyer: this.destroyer,
    };
  }

  addShips(shipsName, x, y, direction) {
    const ship = this.ships[shipsName.type];

    if (
      (direction === "horizontal" && x + shipsName.length <= 10 && y <= 10) ||
      (direction === "vertical" && x <= 10 && y + shipsName.length <= 10)
    ) {
      ship.x = [];
      ship.y = [];

      for (let i = 0; i < shipsName.length; i++) {
        ship.x.push(direction === "horizontal" ? x + i : x);
        ship.y.push(direction === "vertical" ? y + i : y);
      }
    }
  }

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
