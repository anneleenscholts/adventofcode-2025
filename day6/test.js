// Test with the example
const testInput = [
  "123 328  51 64",
  " 45 64  387 23",
  "  6 98  215 314",
  "*   +   *   +"
];

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

const tilted = tilt90Degrees(testInput);
console.log("Tilted:", tilted);
console.log();

// Process rightmost column (which becomes first row after tilt)
const firstRow = tilted[0].split(" ");
console.log("First row after tilt:", firstRow);
const operand = firstRow[firstRow.length - 1];
const numbers = firstRow.slice(0, firstRow.length - 1);
console.log("Numbers:", numbers);
console.log("Operand:", operand);
console.log();

// Expected: 4 + 431 + 623 = 1058
console.log("Expected: 4 + 431 + 623 = 1058");

const maxLen = Math.max(...numbers.map(n => n.length));
console.log("Max length:", maxLen);

// Try the logic
const reversed = numbers.map(num => num.split('').reverse().join(''));
console.log("Reversed numbers:", reversed);

for (let digitPos = 0; digitPos < maxLen; digitPos++) {
  let numStr = '';
  for (let i = 0; i < reversed.length; i++) {
    const num = reversed[i];
    if (digitPos < num.length) {
      numStr += num[digitPos];
    }
  }
  console.log(`Position ${digitPos}: "${numStr}" = ${parseInt(numStr)}`);
}

console.log("\nCalculating: 623 + 431 + 4 =", 623 + 431 + 4);
