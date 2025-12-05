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
  let numberOfFresh = 0;
  for (let i = 0; i < ranges.length; i++) {
    const [start, finish] = ranges[i].split("-");
    let bla = parseInt(finish) - parseInt(start);
    numberOfFresh = numberOfFresh + bla;
  }
  console.log("listoffresh", numberOfFresh);
};

function main() {
  let count = 0;
  const ingredients = readFileToArray("day5/ingredients.txt");
  const rangeOfFreshFood = readFileToArray("day5/range.txt");
  for (let i = 0; i < ingredients.length; i++) {
    const isInRange = checkIfIngredientInRange(
      parseInt(ingredients[i]),
      rangeOfFreshFood
    );
    if (isInRange) {
      count = count + 1;
    }
  }
  whichIngredientsAreFresh(rangeOfFreshFood);
  console.log("total", count);
}

main();
