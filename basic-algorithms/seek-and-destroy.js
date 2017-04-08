// https://www.freecodecamp.com/challenges/seek-and-destroy

function destroyer(arr) {
  var args = Array.from(arguments);

  return arr.filter(function (val) {
    return args.indexOf(val) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);