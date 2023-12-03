const { gameLoop } = require("../src/index.js");
const { playerGameboard, computerGameboard, humanPlayer, computerPlayer } =
  gameLoop();

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

  if (direction === "horizontal") {
    if (shipName === "carrier") {
      const carrierHoriz = { x: [x, x + 1, x + 2, x + 3, x + 4], y: [y] };
    } else {
      let shipConfig = { x: [], y: [] };

      for (let i = 0; i < computerGameboard.ships[shipName].shipLength; i++) {
        shipConfig.x.push(x + i);
        shipConfig.y.push(y);
      }
      while (
        shipConfig.x.some((coord) =>
          computerGameboard.ships[shipName].x.includes(coord)
        ) ||
        shipConfig.y.some((coord) =>
          computerGameboard.ships[shipName].y.includes(coord)
        )
      ) {
        const newCoordinates = getxy();

        shipConfig = { x: [], y: [] };
        for (let i = 0; i < computerGameboard.ships[shipName].shipLength; i++) {
          shipConfig.x.push(newCoordinates.x + i);
          shipConfig.y.push(newCoordinates.y);
        }
      }
    }
  } else if (direction === "vertical") {
    if (shipName === "carrier") {
      const carrierVert = { x: [x], y: [y, y + 1, y + 2, y + 3, y + 4] };
    } else {
      let shipConfig = { x: [], y: [] };

      for (let i = 0; i < computerGameboard.ships[shipName].shipLength; i++) {
        shipConfig.x.push(x);
        shipConfig.y.push(y + i);
      }

      while (
        shipConfig.x.some((coord) =>
          computerGameboard.ships[shipName].x.includes(coord)
        ) ||
        shipConfig.y.some((coord) =>
          computerGameboard.ships[shipName].y.includes(coord)
        )
      ) {
        const newCoordinates = getxy();

        shipConfig = { x: [], y: [] };
        for (let i = 0; i < computerGameboard.ships[shipName].shipLength; i++) {
          shipConfig.x.push(newCoordinates.x);
          shipConfig.y.push(newCoordinates.y + i);
        }
      }
    }
  }

  computerGameboard.addShips(shipName, x, y, direction);
}

export { placeComputerShips };
