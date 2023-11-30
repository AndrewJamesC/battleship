import { computerGameboard, playerGameboard } from "../src/index";

class Player {
  constructor() {
    this.attackedLocation = [];
  }
  computerAttack() {
    function getxy() {
      return {
        x: Math.floor(Math.random() * 10) + 1,
        y: Math.floor(Math.random() * 10) + 1,
      };
    }
    let { x: xValue, y: yValue } = getxy();
    while (
      this.attackedLocation.some(
        ([attackedX, attackedY]) => attackedX === xValue && attackedY === yValue
      )
    ) {
      ({ x: xValue, y: yValue } = getxy());
    }

    this.attackedLocation.push([xValue, yValue]);
    playerGameboard.receiveAttack(xValue, yValue);
  }
  playerAttack(x, y) {
    const alreadyAttacked = this.attackedLocation.some(
      ([attackedX, attackedY]) => attackedX === x && attackedY === y
    );
    if (alreadyAttacked) {
      console.log("Choose new co-ordinates");
    } else {
      this.attackedLocation.push([x, y]);
      computerGameboard.receiveAttack(x, y);
    }
  }
}

export default Player;
