import { gameLoop } from "./index";
import { placeCruiser } from "./placeCruiser";
const { playerGameboard, computerGameboard, humanPlayer, computerPlayer } =
  gameLoop();

function handleHorizontalPlacement(targetCell, xValue, yValue) {
  if (xValue <= 7) {
    targetCell.classList.add("hover");

    const targetPlusOne = `${xValue + 1}-${yValue}`;
    const targetPlusTwo = `${xValue + 2}-${yValue}`;
    const targetPlusThree = `${xValue + 3}-${yValue}`;

    document.querySelector(`#P${targetPlusOne}`).classList.add("hover");
    document.querySelector(`#P${targetPlusTwo}`).classList.add("hover");
    document.querySelector(`#P${targetPlusThree}`).classList.add("hover");
  } else if (xValue > 7) {
    targetCell.classList.add("noPlaceHere");
  }
}

function handleVerticalPlacement(targetCell, xValue, yValue) {
  if (yValue <= 7) {
    targetCell.classList.add("hover");

    const targetPlusOne = `${xValue}-${yValue + 1}`;
    const targetPlusTwo = `${xValue}-${yValue + 2}`;
    const targetPlusThree = `${xValue}-${yValue + 3}`;

    document.querySelector(`#P${targetPlusOne}`).classList.add("hover");
    document.querySelector(`#P${targetPlusTwo}`).classList.add("hover");
    document.querySelector(`#P${targetPlusThree}`).classList.add("hover");
  } else if (yValue > 7) {
    targetCell.classList.add("noPlaceHere");
  }
}

function placeBattleship(playerGameboard) {
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

    for (let i = 1; i <= 3; i++) {
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

  if (!directionButton.hasAttribute("data-listener-attached")) {
    directionButton.addEventListener("click", () => {
      directionButton.classList.toggle("vertical");
    });

    directionButton.setAttribute("data-listener-attached", true);
  }
}

function handleHorizontalClick(targetCell, xValue, yValue, playerGameboard) {
  if (xValue <= 7) {
    targetCell.classList.add("battleship");
    const targetPlusOne = `${xValue + 1}-${yValue}`;
    const targetPlusTwo = `${xValue + 2}-${yValue}`;
    const targetPlusThree = `${xValue + 3}-${yValue}`;

    document.querySelector(`#P${targetPlusOne}`).classList.add("battleship");
    document.querySelector(`#P${targetPlusTwo}`).classList.add("battleship");
    document.querySelector(`#P${targetPlusThree}`).classList.add("battleship");

    playerGameboard.addShips("battleship", xValue, yValue, "horizontal");
    console.log(playerGameboard);
    removeEventListeners();
    placeCruiser(playerGameboard);
    return;
  }
}

function handleVerticalClick(targetCell, xValue, yValue, playerGameboard) {
  if (yValue <= 7) {
    targetCell.classList.add("battleship");
    const targetPlusOne = `${xValue}-${yValue + 1}`;
    const targetPlusTwo = `${xValue}-${yValue + 2}`;
    const targetPlusThree = `${xValue}-${yValue + 3}`;

    document.querySelector(`#P${targetPlusOne}`).classList.add("battleship");
    document.querySelector(`#P${targetPlusTwo}`).classList.add("battleship");
    document.querySelector(`#P${targetPlusThree}`).classList.add("battleship");

    playerGameboard.addShips("battleship", xValue, yValue, "vertical");
    console.log(playerGameboard);
    removeEventListeners();
    placeCruiser(playerGameboard);
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

export { placeBattleship };
