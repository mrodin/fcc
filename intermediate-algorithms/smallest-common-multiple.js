// https://www.freecodecamp.org/challenges/smallest-common-multiple

function smallestCommons(arr) {
  const sortedArr = arr.sort(function(a, b) {
    return a - b;
  });
  const min = sortedArr[0];
  const max = sortedArr[1];

  function range(min, max) {
    let arr = [];
    for (var i = min; i <= max; i++) {
      arr.push(i);
    }
    return arr;
  }

  function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  let multiple = min;
  range(min, max).forEach(function (n) {
    multiple = lcm(multiple, n);
  });

  return multiple;
}

console.log(smallestCommons([1, 5]));