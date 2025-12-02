import { input as puzzleInput } from "./input.js";

const searchPattern = (number) => {
  if (number.toString()[0] == 0) {
    return;
  }
  const myPatternNumbers = [];
  const numberLength = number.toString().length;
  let allTheNumbers = [];
  for (let i = 1; i < numberLength; i++) {
    if (numberLength % i === 0) {
      allTheNumbers.push(i);
    }
  }
  const stringNumber = number.toString();
  for (let k = 0; k < allTheNumbers.length; k++) {
    const pattern = stringNumber.slice(0, allTheNumbers[k]);
    const repeatNumberOfTimes = stringNumber.length / pattern.length;
    if (repeatNumberOfTimes < 2) {
      // if (repeatNumberOfTimes !== 2) { // PART 1
      continue;
    }
    let newString = "";
    for (let z = 1; z <= repeatNumberOfTimes; z++) {
      newString = newString + pattern;
    }
    if (parseInt(newString) === parseInt(number)) {
      myPatternNumbers.push(parseInt(number));
      break; // Remove this for PART 1
    }
  }
  return myPatternNumbers;
};

const main = () => {
  let allTheArrays = [];
  const input = puzzleInput.trim().split(",");
  for (let i = 0; i < input.length; i++) {
    const [start, finish] = input[i].split("-");
    for (let j = parseInt(start); j <= parseInt(finish); j++) {
      const myArray = searchPattern(j);
      allTheArrays = [...allTheArrays, ...myArray];
    }
  }
  let sum = 0;
  for (let i = 0; i < allTheArrays.length; i++) {
    sum = sum + allTheArrays[i];
  }
  console.log("sum", sum);
};

main();
