import Ship from "./ship";
import Gameboard from "./Gameboard";
import Player from "./Player";

// const battleship = new Ship("battleship", 4);
// const carrier = new Ship("carrier", 5);
// const cruiser = new Ship("cruiser", 3);
// const submarine = new Ship("submarine", 3);
// const destroyer = new Ship("destroyer", 2);

function gameLoop() {
  const playerGameboard = new Gameboard();
  const computerGameboard = new Gameboard();
  const humanPlayer = new Player();
  const computerPlayer = new Player();

  return playerGameboard, computerGameboard, humanPlayer, computerPlayer;
}
gameLoop();

export { gameLoop, humanPlayer, computerPlayer };
