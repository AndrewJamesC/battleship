import { gameLoop } from "../src/index";

function compBoardDom(computerGameboard, playerGameboard, computerPlayer) {
  const computerGameboardCells = document.querySelectorAll(".computer");
  const compCellsArr = [...computerGameboardCells];

  compCellsArr.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      const xValue = Number(e.target.id.slice(1).split("-")[0]);
      const yValue = Number(e.target.id.split("-")[1]);

      const parentElement = document.querySelector(`#${e.target.id}`);
      const firstChildElement = parentElement.firstElementChild;
      if (playerGameboard.ships.destroyer.x === undefined) {
        return;
      }
      if (firstChildElement) {
        return;
      }
      const result = computerGameboard.receiveAttack(xValue, yValue);
      if (result === "hit") {
        const newDiv = document.createElement("div");
        newDiv.classList.add("red-dot");
        document.querySelector(`#${e.target.id}`).appendChild(newDiv);
        document.querySelector(".instructions").innerHTML = "Hit";
        setTimeout(function () {
          computerPlayer.computerAttack(playerGameboard);
        }, 1000);
      } else if (result === "miss") {
        const newDiv = document.createElement("div");
        newDiv.classList.add("black-dot");
        document.querySelector(`#${e.target.id}`).appendChild(newDiv);
        document.querySelector(".instructions").innerHTML = "Miss";
        setTimeout(function () {
          computerPlayer.computerAttack(playerGameboard);
        }, 1000);
      } else if (result === "game over") {
        const newDiv = document.createElement("div");
        newDiv.classList.add("red-dot");
        document.querySelector(`#${e.target.id}`).appendChild(newDiv);
        document.querySelector(".instructions").innerHTML =
          "All ships sunk: Player Wins";
        const compCellsNodelist = document.querySelectorAll(".computer");
        const compCellsArr = [...compCellsNodelist];
        compCellsArr.forEach((cell) => {
          cell.replaceWith(cell.cloneNode(true));
        });
      }
    });
  });
}

export { compBoardDom };
