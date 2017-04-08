// https://www.freecodecamp.com/challenges/where-do-i-belong

function getIndexToIns(arr, num) {
  arr.push(num);
  var sortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  return sortedArr.indexOf(num);
}

getIndexToIns([40, 60], 50);