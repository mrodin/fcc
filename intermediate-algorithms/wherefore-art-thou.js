// https://www.freecodecamp.org/challenges/wherefore-art-thou

function whatIsInAName(collection, source) {
  let arr = collection.filter(obj => {
    let sourceKeys = Object.keys(source);
    
    return sourceKeys.every(key => {
      if (obj.hasOwnProperty(key) && obj[key] === source[key]) {
        return true;
      }
    });
  });

  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });