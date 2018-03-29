// https://www.freecodecamp.org/challenges/sum-all-odd-fibonacci-numbers

function sumFibs(num) {
  let numberA = 0;
  let numberB = 1;
  let result = 0;

  while (numberB <= num) {
    if (numberB % 2 != 0) {
      result += numberB;
    }

    numberB += numberA;
    numberA = numberB - numberA;

  }

  return result;
}

sumFibs(75024);