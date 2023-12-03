import "./styles.css";
import Gameboard from "./Gameboard";
import Player from "./Player";
import { placeCarrier } from "./placeCarrier";

async function gameLoop() {
  const playerGameboard = new Gameboard();
  const computerGameboard = new Gameboard();
  const humanPlayer = new Player(playerGameboard, computerGameboard);
  const computerPlayer = new Player(playerGameboard, computerGameboard);
  placeCarrier(playerGameboard);

  return { playerGameboard, computerGameboard, humanPlayer, computerPlayer };
}

//gameLoop();

export { gameLoop };
