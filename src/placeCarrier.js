import { gameLoop } from "./index";
import { placeBattleship } from "./placeBattleship";
const { playerGameboard, computerGameboard, humanPlayer, computerPlayer } =
  gameLoop();

function handleHorizontalPlacement(targetCell, xValue, yValue) {
  if (xValue <= 6) {
    targetCell.classList.add("hover");

    const targetPlusOne = `${xValue + 1}-${yValue}`;
    const targetPlusTwo = `${xValue + 2}-${yValue}`;
    const targetPlusThree = `${xValue + 3}-${yValue}`;
    const targetPlusFour = `${xValue + 4}-${yValue}`;

    document.querySelector(`#P${targetPlusOne}`).classList.add("hover");
    document.querySelector(`#P${targetPlusTwo}`).classList.add("hover");
    document.querySelector(`#P${targetPlusThree}`).classList.add("hover");
    document.querySelector(`#P${targetPlusFour}`).classList.add("hover");
  } else if (xValue > 6) {
    targetCell.classList.add("noPlaceHere");
  }
}

function handleVerticalPlacement(targetCell, xValue, yValue) {
  if (yValue <= 6) {
    targetCell.classList.add("hover");

    const targetPlusOne = `${xValue}-${yValue + 1}`;
    const targetPlusTwo = `${xValue}-${yValue + 2}`;
    const targetPlusThree = `${xValue}-${yValue + 3}`;
    const targetPlusFour = `${xValue}-${yValue + 4}`;

    document.querySelector(`#P${targetPlusOne}`).classList.add("hover");
    document.querySelector(`#P${targetPlusTwo}`).classList.add("hover");
    document.querySelector(`#P${targetPlusThree}`).classList.add("hover");
    document.querySelector(`#P${targetPlusFour}`).classList.add("hover");
  } else if (yValue > 6) {
    targetCell.classList.add("noPlaceHere");
  }
}

function placeCarrier(playerGameboard) {
  const playerCellsNodelist = document.querySelectorAll(".player");
  const playerCellsArr = [...playerCellsNodelist];
  const directionButton = document.querySelector(".direction-btn");

  function handleMouseover(e) {
    const xValue = Number(e.target.id.slice(1).split("-")[0]);
    const yValue = Number(e.target.id.split("-")[1]);

    if (!directionButton.classList.contains("vertical")) {
      handleHorizontalPlacement(e.target, xValue, yValue);
    } else {
      handleVerticalPlacement(e.target, xValue, yValue);
    }
  }

  function handleMouseout(e) {
    const xValue = Number(e.target.id.slice(1).split("-")[0]);
    const yValue = Number(e.target.id.split("-")[1]);

    e.target.classList.remove("hover", "noPlaceHere");

    for (let i = 1; i <= 4; i++) {
      const targetIDHorizontal = `P${xValue + i}-${yValue}`;
      const targetElemHorizontal = document.querySelector(
        `#${targetIDHorizontal}`
      );

      if (targetElemHorizontal) {
        targetElemHorizontal.classList.remove("hover");
      }

      const targetIDVertical = `P${xValue}-${yValue + i}`;
      const targetElemVertical = document.querySelector(`#${targetIDVertical}`);

      if (targetElemVertical) {
        targetElemVertical.classList.remove("hover");
      }
    }
  }

  function handleClick(e) {
    const xValue = Number(e.target.id.slice(1).split("-")[0]);
    const yValue = Number(e.target.id.split("-")[1]);

    if (!directionButton.classList.contains("vertical")) {
      handleHorizontalClick(e.target, xValue, yValue, playerGameboard);
    } else {
      handleVerticalClick(e.target, xValue, yValue, playerGameboard);
    }
  }

  playerCellsArr.forEach((cell) => {
    cell.addEventListener("mouseover", handleMouseover);
    cell.addEventListener("mouseout", handleMouseout);
    cell.addEventListener("click", handleClick);
  });

  directionButton.addEventListener("click", () => {
    directionButton.classList.toggle("vertical");
  });
}

function handleHorizontalClick(targetCell, xValue, yValue, playerGameboard) {
  if (xValue <= 6) {
    targetCell.classList.add("carrier");
    const targetPlusOne = `${xValue + 1}-${yValue}`;
    const targetPlusTwo = `${xValue + 2}-${yValue}`;
    const targetPlusThree = `${xValue + 3}-${yValue}`;
    const targetPlusFour = `${xValue + 4}-${yValue}`;

    document.querySelector(`#P${targetPlusOne}`).classList.add("carrier");
    document.querySelector(`#P${targetPlusTwo}`).classList.add("carrier");
    document.querySelector(`#P${targetPlusThree}`).classList.add("carrier");
    document.querySelector(`#P${targetPlusFour}`).classList.add("carrier");

    playerGameboard.addShips("carrier", xValue, yValue, "horizontal");
    removeEventListeners();
    placeBattleship(playerGameboard);
    return;
  }
}

function handleVerticalClick(targetCell, xValue, yValue, playerGameboard) {
  if (yValue <= 6) {
    targetCell.classList.add("carrier");
    const targetPlusOne = `${xValue}-${yValue + 1}`;
    const targetPlusTwo = `${xValue}-${yValue + 2}`;
    const targetPlusThree = `${xValue}-${yValue + 3}`;
    const targetPlusFour = `${xValue}-${yValue + 4}`;

    document.querySelector(`#P${targetPlusOne}`).classList.add("carrier");
    document.querySelector(`#P${targetPlusTwo}`).classList.add("carrier");
    document.querySelector(`#P${targetPlusThree}`).classList.add("carrier");
    document.querySelector(`#P${targetPlusFour}`).classList.add("carrier");

    playerGameboard.addShips("carrier", xValue, yValue, "vertical");

    removeEventListeners();
    placeBattleship(playerGameboard);
    return;
  }
}

function removeEventListeners() {
  const playerCellsNodelist = document.querySelectorAll(".player");
  const playerCellsArr = [...playerCellsNodelist];
  playerCellsArr.forEach((cell) => {
    cell.replaceWith(cell.cloneNode(true));
  });
}

export { placeCarrier };
