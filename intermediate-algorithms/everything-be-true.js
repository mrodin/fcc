// https://www.freecodecamp.org/challenges/everything-be-true

function truthCheck(collection, pre) {
  let result = true;

  collection.forEach(object => {
    if (!object[pre]) {
      result = false;
    }
  });

  return result;
}

console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));