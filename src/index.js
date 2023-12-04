import "./styles.css";
import Gameboard from "./Gameboard";
import Player from "./Player";
import { placeCarrier } from "./placeCarrier";
import { placeComputerShips } from "./placeComputerShips";
import { compBoardDom } from "./computerBoardDom";

function gameLoop() {
  const playerGameboard = new Gameboard();
  const computerGameboard = new Gameboard();
  const humanPlayer = new Player(playerGameboard, computerGameboard);
  const computerPlayer = new Player(playerGameboard, computerGameboard);
  placeComputerShips("carrier", computerGameboard);
  placeCarrier(playerGameboard);
  compBoardDom(computerGameboard, playerGameboard, computerPlayer);
  return { playerGameboard, computerGameboard, humanPlayer, computerPlayer };
}

gameLoop();

export { gameLoop };
