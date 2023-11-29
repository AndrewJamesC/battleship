// test/index.test.js
import { battleship } from "../src/index";

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
