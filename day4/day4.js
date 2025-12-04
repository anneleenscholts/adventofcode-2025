import { readFileToArray } from "../utils/utils.js";

const findRollsToAccess = (inputArr) => {
  let count = 0;
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr[i].length; j++) {
      if (inputArr[i][j] !== "@") {
        continue;
      }
      let numberOfRoles = 0;
      if (i !== 0) {
        if (j !== 0) {
          if (inputArr[i - 1][j - 1] === "@") {
            numberOfRoles = numberOfRoles + 1;
          }
        }
        if (inputArr[i - 1][j] === "@") {
          numberOfRoles = numberOfRoles + 1;
        }
        if (j !== inputArr[i].length - 1) {
          if (inputArr[i - 1][j + 1] === "@") {
            numberOfRoles = numberOfRoles + 1;
          }
        }
      }
      if (j !== 0) {
        if (inputArr[i][j - 1] === "@") {
          numberOfRoles = numberOfRoles + 1;
        }
      }
      if (j !== inputArr[i].length - 1) {
        if (inputArr[i][j + 1] === "@") {
          numberOfRoles = numberOfRoles + 1;
        }
      }
      if (i !== inputArr.length - 1) {
        if (j !== 0) {
          if (inputArr[i + 1][j - 1] === "@") {
            numberOfRoles = numberOfRoles + 1;
          }
        }
        if (inputArr[i + 1][j] === "@") {
          numberOfRoles = numberOfRoles + 1;
        }
        if (j !== inputArr[i].length - 1) {
          if (inputArr[i + 1][j + 1] === "@") {
            numberOfRoles = numberOfRoles + 1;
          }
        }
      }
      if (numberOfRoles < 4) {
        count = count + 1;
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
