import { readFileToArray } from "../utils/utils.js";

const checkIfIngredientInRange = (ingredient, ranges) => {
  for (let i = 0; i < ranges.length; i++) {
    const [start, finish] = ranges[i].split("-");
    if (parseInt(start) <= ingredient && ingredient <= parseInt(finish)) {
      return true;
    }
    continue;
  }
  return false;
};

const whichIngredientsAreFresh = (ranges) => {
  const parsedRanges = ranges.map((range) => {
    const [start, finish] = range.split("-");
    return {
      start: parseInt(start),
      end: parseInt(finish),
    };
  });

  parsedRanges.sort((a, b) => a.start - b.start);

  const mergedRanges = [];
  let currentRange = parsedRanges[0];

  for (let i = 1; i < parsedRanges.length; i++) {
    const nextRange = parsedRanges[i];
    if (nextRange.start <= currentRange.end + 1) {
      currentRange.end = Math.max(currentRange.end, nextRange.end);
    } else {
      mergedRanges.push(currentRange);
      currentRange = nextRange;
    }
  }

  mergedRanges.push(currentRange);
  let numberOfFresh = 0;
  for (let i = 0; i < mergedRanges.length; i++) {
    numberOfFresh += mergedRanges[i].end - mergedRanges[i].start + 1;
  }
  return numberOfFresh;
};

function main() {
  let count = 0;
  const ingredients = readFileToArray("day5/ingredients.txt");
  const rangeOfFreshFood = readFileToArray("day5/range.txt");
  // PART 1
  for (let i = 0; i < ingredients.length; i++) {
    const isInRange = checkIfIngredientInRange(
      parseInt(ingredients[i]),
      rangeOfFreshFood
    );
    if (isInRange) {
      count = count + 1;
    }
  }
  // PART 2
  const numberOfFresh = whichIngredientsAreFresh(rangeOfFreshFood);
  console.log("freshFound", count);
  console.log("numberOfFreshTotal", numberOfFresh);
}

main();
