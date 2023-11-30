// test/index.test.js
import {
  battleship,
  playerGameboard,
  humanPlayer,
  computerGameboard,
  computerPlayer,
} from "../src/index";

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

    expect(battleship.hits).toBe(1);
  });

  test("should show co-ords of missed shot", () => {
    playerGameboard.receiveAttack(10, 10);
    expect(playerGameboard.miss).toEqual([[10, 10]]);
  });

  test("show battleship is sunk", () => {
    battleship.hits = 0;
    playerGameboard.addShips(battleship, 4, 4, "horizontal");
    playerGameboard.receiveAttack(4, 4);
    playerGameboard.receiveAttack(4, 5);
    playerGameboard.receiveAttack(4, 6);
    playerGameboard.receiveAttack(4, 7);

    expect(battleship.isSunk()).toBe(true);
  });

  test("show battleship not sunk", () => {
    battleship.hits = 0;
    playerGameboard.addShips(battleship, 4, 4, "horizontal");

    playerGameboard.receiveAttack(4, 6);
    playerGameboard.receiveAttack(4, 7);
    playerGameboard.receiveAttack(4, 8);

    expect(battleship.isSunk()).toBe(false);
  });
});

describe("Player tests", () => {
  test("player can attack enemy gameBoard", () => {
    humanPlayer.playerAttack(1, 1);
    expect(computerGameboard.miss).toEqual([[1, 1]]);
  });

  test("computer can attack enemy gameBoard", () => {
    playerGameboard.miss = [];
    playerGameboard.ships = {};
    computerPlayer.computerAttack();
    expect(playerGameboard.miss[0][0].toString()).toMatch(/[1-9]|10/);
    expect(playerGameboard.miss[0][1].toString()).toMatch(/[1-9]|10/);
  });
});
