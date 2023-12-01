const { gameLoop } = require("../src/index.js");
const { playerGameboard, computerGameboard, humanPlayer, computerPlayer } =
  gameLoop();

describe("Player tests", () => {
  test("player can attack enemy gameBoard", () => {
    computerGameboard.miss = [];
    computerGameboard.addShips("carrier", 3, 8, "vertical");
    humanPlayer.playerAttack(1, 1);
    console.log(computerGameboard.ships);
    expect(computerGameboard.miss).toEqual([[1, 1]]);
  });

  test("computer can attack enemy gameBoard", () => {
    playerGameboard.miss = [];
    computerPlayer.computerAttack();
    expect(playerGameboard.miss[0][0].toString()).toMatch(/[1-9]|10/);
    expect(playerGameboard.miss[0][1].toString()).toMatch(/[1-9]|10/);
  });
});

playerGameboard.addShips("battleship", 1, 1, "horizontal");

test("battleship length is 4", () => {
  expect(playerGameboard.ships.battleship.shipLength).toBe(4);
});
test("calling hit() increases battleships hit by 1", () => {
  playerGameboard.ships.battleship.hits = 0;
  playerGameboard.ships.battleship.hit();
  playerGameboard.ships.battleship.hit();
  expect(playerGameboard.ships.battleship.hits).toBe(2);
});

test("calling isSunk() returns false when hits < length", () => {
  expect(playerGameboard.ships.battleship.isSunk()).toBe(false);
});

test("calling isSunk() returns true when hits = length", () => {
  playerGameboard.ships.battleship.hits = 0;
  playerGameboard.ships.battleship.hit();
  playerGameboard.ships.battleship.hit();
  playerGameboard.ships.battleship.hit();
  playerGameboard.ships.battleship.hit();
  expect(playerGameboard.ships.battleship.isSunk()).toBe(true);
});

test("should have battleship at coordinates [1, 1]", () => {
  playerGameboard.ships.battleship.hits = 0;
  playerGameboard.addShips("battleship", 6, 6, "horizontal");
  expect(playerGameboard.ships.battleship).toEqual({
    hits: 0,
    shipLength: 4,
    type: "battleship",
    x: [6, 7, 8, 9],
    y: [6],
  });
});

test("should not place carrier at coordinates not on gameboard", () => {
  playerGameboard.addShips("carrier", 3, 8, "vertical");
  expect(playerGameboard.ships.carrier).toEqual({
    hits: 0,
    shipLength: 5,
    type: "carrier",
    x: [],
    y: [],
  });
});

// test("should show co-ords of missed shot", () => {
//   playerGameboard.receiveAttack(10, 10);
//   expect(playerGameboard.miss).toEqual([[10, 10]]);
// });

test("show submarine is sunk", () => {
  playerGameboard.ships.submarine.hits = 0;
  playerGameboard.addShips("submarine", 4, 4, "horizontal");
  playerGameboard.receiveAttack(4, 4);
  playerGameboard.receiveAttack(5, 4);
  playerGameboard.receiveAttack(6, 4);

  expect(playerGameboard.ships.submarine.isSunk()).toBe(true);
});
