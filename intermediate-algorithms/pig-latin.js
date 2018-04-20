// https://www.freecodecamp.org/challenges/pig-latin

function translatePigLatin(str) {
  const regex = /[aeiou]/gi;
  let result = '';

  if (str[0].match(regex)) {
    result = str + 'way';
  } else {
    const firstVowelIndex = str.indexOf(str.match(regex)[0]);
    result = str.substr(firstVowelIndex) + str.substr(0, firstVowelIndex) + 'ay';
  }

  return result;
}

translatePigLatin("consonant");