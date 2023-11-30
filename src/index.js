import Ship from "./ship";
import Gameboard from "./Gameboard";

const battleship = new Ship("battleship", 4);
const carrier = new Ship("carrier", 5);
const cruiser = new Ship("cruiser", 3);
const submarine = new Ship("submarine", 3);
const destroyer = new Ship("destroyer", 2);

const playerGameboard = new Gameboard();

playerGameboard.addShips(battleship, 4, 4, "horizontal");
playerGameboard.receiveAttack(5, 4);

export { battleship, playerGameboard };
