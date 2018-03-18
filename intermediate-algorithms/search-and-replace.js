// https://www.freecodecamp.org/challenges/search-and-replace

function myReplace(str, before, after) {
  let strArr = str.split(" ");
  let beforeIndex = strArr.indexOf(before);
  let isCapital = strArr[beforeIndex] !== strArr[beforeIndex].toLowerCase();

  if (isCapital) {
    let capitalizedAfter = after.charAt(0).toUpperCase() + after.slice(1);
    strArr.splice(beforeIndex, 1, capitalizedAfter);
  } else {
    strArr.splice(beforeIndex, 1, after);
  }

  return strArr.join(" ");
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");