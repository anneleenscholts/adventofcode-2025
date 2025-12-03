import { readFileToArray } from "../utils/utils.js";

const findHighestJoltage = (inputString) => {
  const TARGET_LENGTH = 12;
  const memo = new Map();

  const findBestSubsequence = (position, digitsNeeded) => {
    const key = `${position},${digitsNeeded}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    if (digitsNeeded === 0) {
      return "";
    }

    const digitsRemaining = inputString.length - position;
    if (digitsRemaining < digitsNeeded) {
      return null; // Impossible
    }

    const withCurrent =
      inputString[position] +
      findBestSubsequence(position + 1, digitsNeeded - 1);

    const withoutCurrent = findBestSubsequence(position + 1, digitsNeeded);

    let result;
    if (withoutCurrent === null) {
      result = withCurrent;
    }
    if (withCurrent === null) {
      result = withoutCurrent;
    }
    result = withCurrent > withoutCurrent ? withCurrent : withoutCurrent;

    memo.set(key, result);
    return result;
  };

  const result = findBestSubsequence(0, TARGET_LENGTH);
  console.log(result);
  return parseInt(result);
};

const main = () => {
  const input = readFileToArray("./day3/input.txt");
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum = sum + findHighestJoltage(input[i]);
  }
  console.log("sum", sum);
};

main();
