// https://www.freecodecamp.org/challenges/sorted-union

function uniteUnique(arr1, arr2, arr3) {
  let argsArr = Array.from(arguments);

  let flattenedArr = argsArr.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    []
  );

  let result = flattenedArr.filter(function (item, pos) {
    return flattenedArr.indexOf(item) == pos;
  });

  return(result);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);