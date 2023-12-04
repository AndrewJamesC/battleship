const { gameLoop } = require("../src/index.js");
const { playerGameboard, computerGameboard, humanPlayer, computerPlayer } =
  gameLoop();

// check the ships dont over shoot the board
function placeComputerShips(shipName, computerGameboard) {
  function getxy() {
    return {
      x: Math.floor(Math.random() * 10) + 1,
      y: Math.floor(Math.random() * 10) + 1,
      direction:
        Math.floor(Math.random() * 2) + 1 === 2 ? "horizontal" : "vertical",
    };
  }

  const { x, y, direction } = getxy();
  let shipsAdded = { x: [], y: [] };
  let shipConfig = { x: [], y: [] };

  if (direction === "horizontal") {
    shipConfig.y.push(y);
    for (let i = 0; i < computerGameboard.ships[shipName].shipLength; i++) {
      shipConfig.x.push(x + i);
    }

    while (
      shipConfig.x.some((coord) => shipsAdded.x.includes(coord)) ||
      shipConfig.y.some((coord) => shipsAdded.y.includes(coord)) ||
      shipConfig.x.some((coord) => coord > 10) ||
      shipConfig.y.some((coord) => coord > 10)
    ) {
      const newCoordinates = getxy();

      shipConfig = { x: [], y: [] };
      shipConfig.y.push(newCoordinates.y);
      for (let i = 0; i < computerGameboard.ships[shipName].shipLength; i++) {
        shipConfig.x.push(newCoordinates.x + i);
      }
    }
  } else if (direction === "vertical") {
    shipConfig.x.push(x);
    for (let i = 0; i < computerGameboard.ships[shipName].shipLength; i++) {
      shipConfig.y.push(y + i);
    }

    while (
      shipConfig.x.some((coord) => shipsAdded.x.includes(coord)) ||
      shipConfig.y.some((coord) => shipsAdded.y.includes(coord)) ||
      shipConfig.x.some((coord) => coord > 10) ||
      shipConfig.y.some((coord) => coord > 10)
    ) {
      const newCoordinates = getxy();

      shipConfig = { x: [], y: [] };
      shipConfig.x.push(newCoordinates.x);
      for (let i = 0; i < computerGameboard.ships[shipName].shipLength; i++) {
        shipConfig.y.push(newCoordinates.y + i);
      }
    }
  }

  shipsAdded.x.push(...shipConfig.x);
  shipsAdded.y.push(...shipConfig.y);
  shipConfig.x = [];
  shipConfig.y = [];

  computerGameboard.addShips(shipName, x, y, direction);
  console.table(computerGameboard.ships);

  for (const eachShip in computerGameboard.ships) {
    if (
      computerGameboard.ships[eachShip].x.length === 0 ||
      computerGameboard.ships[eachShip].y.length === 0
    ) {
      placeComputerShips(eachShip, computerGameboard);
    }
  }
}

export { placeComputerShips };
