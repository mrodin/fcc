// https://www.freecodecamp.com/challenges/confirm-the-ending

function confirmEnding(str, target) {
    if (target === str.substr(target.length * -1)) {
        return true;
    } else {
        return false;
    }
}

confirmEnding("He has to give me a new name", "name");