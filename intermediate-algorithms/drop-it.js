// https://www.freecodecamp.org/challenges/drop-it

function dropElements(arr, func) {
  const ITERATIONS = arr.length;

  for (var i = 0; i < ITERATIONS; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }

  return arr;
}

dropElements([1, 2, 3], function (n) { return n < 3; });