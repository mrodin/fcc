// https://www.freecodecamp.com/challenges/mutations

function mutation(arr) {
  var result = true;

  for (i = 0; i < arr[1].length; i++) {
    if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1) {
      result = false;
    }
  }

  return result;
}

mutation(["hello", "hey"]);