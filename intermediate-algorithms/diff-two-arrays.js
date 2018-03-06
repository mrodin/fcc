// https://www.freecodecamp.org/challenges/diff-two-arrays

function diffArray(arr1, arr2) {
  let result = [];
  
  for (i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      result.push(arr1[i]);
    }
  }
  
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      result.push(arr2[i]);
    }
  }

  return result;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);