import { readFileToArray } from "../utils/utils.js";

const tilt90Degrees = (inputArr) => {
  const grid = inputArr.map((row) => row.trim().split(/\s+/));
  const rows = grid.length;
  const cols = grid[0].length;
  const newArr = [];

  for (let col = cols - 1; col >= 0; col--) {
    const newRow = [];
    for (let row = 0; row < rows; row++) {
      newRow.push(grid[row][col]);
    }
    newArr.push(newRow.join(" "));
  }

  return newArr;
};

const calculateTotal = (input) => {
  let grandTotal = 0;
  for (let i = 0; i < input.length; i++) {
    const myRow = input[i].split(" ");
    const operand = myRow.slice(myRow.length - 1);
    const rest = myRow.slice(0, myRow.length - 1);
    // Part 2
    const longestNumberLength = Math.max(...rest.map((num) => num.length));
    switch (operand[0]) {
      case "*":
        grandTotal = grandTotal + factor(rest, longestNumberLength);
        break;
      case "+":
        grandTotal = grandTotal + sum(rest, longestNumberLength);
        break;
      default:
        console.log("something is wrong");
        break;
    }
  }
  return grandTotal;
};

const factor = (inputArr) => {
  let total = 1;
  for (let i = 0; i < inputArr.length; i++) {
    total = total * parseInt(inputArr[i]);
  }
  return total;
};

const sum = (inputArr) => {
  let total = 0;
  for (let i = 0; i < inputArr.length; i++) {
    total = total + parseInt(inputArr[i]);
  }
  return total;
};

function main() {
  const input = readFileToArray("day6/input.txt");
  const tilted = tilt90Degrees(input);
  const total = calculateTotal(tilted);
  console.log("total", total);
}

main();
