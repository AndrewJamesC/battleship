import Ship from "./ship";
import Gameboard from "./Gameboard";
import Player from "./Player";

function gameLoop() {
  const playerGameboard = new Gameboard();
  const computerGameboard = new Gameboard();
  const humanPlayer = new Player(playerGameboard, computerGameboard);
  const computerPlayer = new Player(playerGameboard, computerGameboard);

  return { playerGameboard, computerGameboard, humanPlayer, computerPlayer };
}

export { gameLoop };
