class Gameboard {
  constructor() {
    this.ships = {};
  }

  addShips(shipsName, x, y, direction) {
    if (shipsName.length - 1 + x <= 10 && shipsName.length - 1 + y <= 10) {
      if (direction === "horizontal") {
        this.ships[shipsName.type] = {
          x: [x],
          y: y,
          direction: direction,
        };
        let count = x + 1;
        while (count <= x + shipsName.length - 1) {
          this.ships[shipsName.type].x.push(count);

          count++;
        }
      } else {
        this.ships[shipsName.type] = {
          x: x,
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
}
export default Gameboard;
