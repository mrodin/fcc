// https://www.freecodecamp.org/challenges/roman-numeral-converter

function convertToRoman(num) {
  const DECIMAL = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const ROMAN = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let result = '';

  for (let i in DECIMAL) {
    while (DECIMAL[i] <= num) {
      result += ROMAN[i];
      num -= DECIMAL[i];
    }
  }

  return result;
}

console.log(convertToRoman(36));