import { readFileToArray } from "../utils/utils.js";

const ROLL_SYMBOL = "@";
const MAX_ADJACENT_ROLLS = 4;

const DIRECTIONS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const isValidPosition = (row, col, grid) => {
  return row >= 0 && row < grid.length && col >= 0 && col < grid[row].length;
};

const countAdjacentRolls = (row, col, grid) => {
  let count = 0;

  for (const [rowOffset, colOffset] of DIRECTIONS) {
    const newRow = row + rowOffset;
    const newCol = col + colOffset;

    if (
      isValidPosition(newRow, newCol, grid) &&
      grid[newRow][newCol] === ROLL_SYMBOL
    ) {
      count++;
    }
  }

  return count;
};

const isAccessible = (row, col, grid) => {
  if (grid[row][col] !== ROLL_SYMBOL) {
    return false;
  }

  const adjacentRollCount = countAdjacentRolls(row, col, grid);
  return adjacentRollCount < MAX_ADJACENT_ROLLS;
};

const findRollsToAccess = (grid) => {
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (isAccessible(row, col, grid)) {
        count++;
      }
    }
  }

  return count;
};

const main = () => {
  const input = readFileToArray("input.txt");
  const count = findRollsToAccess(input);
  console.log("count", count);
};

main();
