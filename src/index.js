import Ship from "./ship";
import Gameboard from "./gameboard";

const battleship = new Ship("battleship", 4);
const carrier = new Ship("carrier", 5);
const cruiser = new Ship("cruiser", 3);
const submarine = new Ship("submarine", 3);
const destroyer = new Ship("destroyer", 2);

export { battleship };
