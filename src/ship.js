class Ship {
  constructor(type, shipLength) {
    this.type = type;
    this.shipLength = shipLength;
    this.hits = 0;
  }
  hit() {
    this.hits++;
  }
  isSunk() {
    return this.shipLength === this.hits;
  }
}

export default Ship;
