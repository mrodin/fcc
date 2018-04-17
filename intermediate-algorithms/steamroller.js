// https://www.freecodecamp.org/challenges/steamroller

function steamrollArray(arr) {
  let result = Array.isArray(arr) ? [].concat.apply([], arr.map(steamrollArray)) : arr;

  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);