// https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range

function sumAll(arr) {
  let result = [];
  let sortedArr = arr.sort((a, b) => (a - b));
  for (i = sortedArr[0]; i <= sortedArr[1]; i++) {
    result.push(i);
  }
  return result.reduce((a, b) => (a + b));
}

sumAll([1, 4]);