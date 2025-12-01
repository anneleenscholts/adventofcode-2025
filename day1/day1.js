import { readFileToArray } from "../utils/utils.js";

let dial = [];
let counter = 0;

const fillDial = (start, stop) => {
  for (let i = start; i <= stop; i++) {
    dial.push(i);
  }
};

const rotate = (currentPosition, steps, direction, max) => {
  let newPosition;
  let zeroCrossings = 0;

  if (direction === "left") {
    newPosition = (currentPosition - steps) % (max + 1);
    if (newPosition < 0) {
      newPosition += max + 1;
    }

    // PART 2
    if (currentPosition === 0) {
      zeroCrossings = Math.floor(steps / (max + 1));
      if (newPosition === 0 && zeroCrossings > 0) {
        zeroCrossings -= 1;
      }
    } else if (steps >= currentPosition) {
      const remainingAfterFirst = steps - currentPosition;
      zeroCrossings = 1 + Math.floor(remainingAfterFirst / (max + 1));

      if (newPosition === 0) {
        zeroCrossings -= 1;
      }
    }
    //
  }
  if (direction === "right") {
    newPosition = (currentPosition + steps) % (max + 1);
    // PART 2
    const totalCrossings = Math.floor((currentPosition + steps) / (max + 1));
    zeroCrossings = totalCrossings;

    if (newPosition === 0 && totalCrossings > 0) {
      zeroCrossings -= 1;
    }
    //
  }

  return [newPosition, zeroCrossings];
};

const main = () => {
  fillDial(0, 99);
  const input = readFileToArray("./day1/input.txt");
  let currentPosition = 50;
  for (let i = 0; i <= input.length - 1; i++) {
    let direction, steps;
    if (input[i].includes("L")) {
      direction = "left";
      steps = input[i].split("L")[1];
    }
    if (input[i].includes("R")) {
      direction = "right";
      steps = input[i].split("R")[1];
    }

    const [newPosition, zeroCrossings] = rotate(
      parseInt(currentPosition),
      parseInt(steps),
      direction,
      99
    );

    counter += zeroCrossings;

    if (newPosition === 0) {
      counter++;
    }

    currentPosition = newPosition;
  }

  console.log("Password:", counter);
};

main();
