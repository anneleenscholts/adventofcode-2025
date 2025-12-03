import { readFileToArray } from "../utils/utils.js";

const findHighestJoltage = (inputString) => {
  console.log(inputString);
  let max = 0;
  for (let i = 0; i < inputString.length - 1; i++) {
    for (let j = i + 1; j < inputString.length; j++) {
      let number = inputString[i] + inputString[j];
      if (parseInt(number) > max) {
        max = parseInt(number);
      }
    }
  }
  console.log(max);
  return max;
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
