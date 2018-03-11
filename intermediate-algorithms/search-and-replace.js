// https://www.freecodecamp.org/challenges/search-and-replace

function myReplace(str, before, after) {
  let strArr = str.split(" ");
  let beforeIndex = strArr.indexOf(before);
  let isCapital = strArr[beforeIndex] !== strArr[beforeIndex].toLowerCase();

  strArr.splice(4, 1, 'May');

  // if (isCapital) {
  //   result = strArr.splice(beforeIndex, 1, after.toUpperCase()).join(" ");
  // } else {
  //   result = strArr.splice(beforeIndex, 1, after).join(" ");
  // }

  console.log(strArr);

  return strArr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");