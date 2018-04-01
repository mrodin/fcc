// https://www.freecodecamp.org/challenges/sum-all-primes

function sumPrimes(num) {
  let result = 0;

  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      result += i;
    }
  }

  return result;
}

const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
};

sumPrimes(10);