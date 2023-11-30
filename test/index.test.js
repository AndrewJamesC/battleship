// test/index.test.js
import { battleship, playerGameboard } from "../src/index";

describe("Battleship tests", () => {
  beforeEach(() => {
    battleship.hits = 0;
  });

  test("battleship length is 4", () => {
    expect(battleship.length).toBe(4);
  });

  test("calling hit() increases battleships hit by 1", () => {
    battleship.hit();
    battleship.hit();
    expect(battleship.hits).toBe(2);
  });

  test("calling isSunk() returns false when hits < length", () => {
    expect(battleship.isSunk()).toBe(false);
  });

  test("calling isSunk() returns true when hits = length", () => {
    battleship.hit();
    battleship.hit();
    battleship.hit();
    battleship.hit();
    expect(battleship.isSunk()).toBe(true);
  });
});

describe("gameBoard tests", () => {
  beforeEach(() => {
    playerGameboard.ships = {};
  });
  test("should have battleship at coordinates [1, 1]", () => {
    playerGameboard.addShips(battleship, 1, 1, "horizontal");
    expect(playerGameboard.ships).toStrictEqual({
      battleship: { x: [1, 2, 3, 4], y: [1], direction: "horizontal" },
    });
  });

  test("should not place battleship at coordinates not on gameboard", () => {
    playerGameboard.addShips(battleship, 8, 8, "vertical");
    expect(playerGameboard.ships).toStrictEqual({});
  });

  test("should show a hit on the battleship", () => {
    battleship.hits = 0;
    playerGameboard.addShips(battleship, 4, 4, "horizontal");
    playerGameboard.receiveAttack(4, 5);

    expect(expect(battleship.hits).toBe(1));
  });
});
