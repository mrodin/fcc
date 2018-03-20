// https://www.freecodecamp.org/challenges/missing-letters

function fearNotLetter(str) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split('');
  let referentialAlphabetStr = ALPHABET.slice(ALPHABET.indexOf(str.charAt(0)),
    (ALPHABET.indexOf(str.slice(-1)) + 1));
  let strArr = str.split("");

  let result = referentialAlphabetStr.filter(i => { return strArr.indexOf(i) < 0; });
  
  if (result.length > 0) {
    return result.join("");
  }
  
  return undefined;
}

fearNotLetter("abce");