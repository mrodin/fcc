// https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays

function largestOfFour(arr) {
  var result = [];

  var sortedArr = [];
  for (i = 0; i < arr.length; i++) {
    sortedArr.push(arr[i].sort(function (a, b) { return b - a; }));
  }

  for (j = 0; j < sortedArr.length; j++) {
    result.push(sortedArr[j][0]);
  }

  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);