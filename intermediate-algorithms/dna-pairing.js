// https://www.freecodecamp.org/challenges/dna-pairing

function pairElement(str) {
  const strArr = str.split('');
  let result = [];

  strArr.forEach(char => {
    switch (char) {
      case 'A':
        result.push(['A', 'T']);
        break;
      case 'T':
        result.push(['T', 'A']);
        break;
      case 'C':
        result.push(['C', 'G']);
        break;
      case 'G':
        result.push(['G', 'C']);
        break;
    }
  });
  
  return result;
}

pairElement("GCG");