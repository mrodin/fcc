// https://www.freecodecamp.com/challenges/falsy-bouncer

function bouncer(arr) {
  return arr.filter(function (val) {
    if (val) { return val; }
  });
}

bouncer([7, "ate", "", false, 9]);