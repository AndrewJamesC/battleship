import { computerGameboard, playerGameboard, gameLoop } from "../src/index";

class Player {
  constructor(playerGameboard, computerGameboard) {
    this.playerGameboard = playerGameboard;
    this.computerGameboard = computerGameboard;
    this.compAttackedLocation = { x: [], y: [] };
    this.attackedLocation = [];
  }

  computerAttack(playerGameboard) {
    console.log("the computer attacked");

    function getxy() {
      return {
        x: Math.floor(Math.random() * 10) + 1,
        y: Math.floor(Math.random() * 10) + 1,
      };
    }

    let { x: xValue, y: yValue } = getxy();

    while (
      this.compAttackedLocation.x.includes(xValue) ||
      this.compAttackedLocation.y.includes(yValue)
    ) {
      ({ x: xValue, y: yValue } = getxy());
    }
    console.log("x" + xValue, "Y" + yValue);
    console.log(typeof xValue, typeof yValue);
    this.compAttackedLocation.x.push(xValue);
    this.compAttackedLocation.y.push(yValue);
    console.log("location" + this.compAttackedLocation.x);
    console.log("location" + this.compAttackedLocation.y);
    const compAtackResult = playerGameboard.receiveAttack(xValue, yValue);
    console.log("comp attack " + compAtackResult);

    if (compAtackResult === "hit") {
      const newDiv = document.createElement("div");
      newDiv.classList.add("red-dot");
      let cellId = `P${xValue}-${yValue}`;
      console.log(cellId);
      document.querySelector(`#${cellId}`).appendChild(newDiv);
      document.querySelector(".instructions").innerHTML = "Hit";
    } else if (compAtackResult === "miss") {
      const newDiv = document.createElement("div");
      newDiv.classList.add("black-dot");
      let cellId = `P${xValue}-${yValue}`;
      console.log(cellId);
      document.querySelector(`#${cellId}`).appendChild(newDiv);
      document.querySelector(".instructions").innerHTML = "Miss";
    } else if (compAtackResult === "game over") {
      const newDiv = document.createElement("div");
      newDiv.classList.add("red-dot");
      let cellId = `p${xValue}-${yValue}`;
      document.querySelector(`#${cellId}`).appendChild(newDiv);
      document.querySelector(".instructions").innerHTML =
        "All ships sunk: Computer Wins";
      const compCellsNodelist = document.querySelectorAll(".computer");
      const compCellsArr = [...compCellsNodelist];
      compCellsArr.forEach((cell) => {
        cell.replaceWith(cell.cloneNode(true));
      });
    }
  }
  playerAttack(x, y) {
    const alreadyAttacked = this.attackedLocation.some(
      ([attackedX, attackedY]) => attackedX === x && attackedY === y
    );
    if (alreadyAttacked) {
      console.log("Choose new co-ordinates");
    } else {
      this.attackedLocation.push([x, y]);
      this.computerGameboard.receiveAttack(x, y);
    }
  }
}

export default Player;
