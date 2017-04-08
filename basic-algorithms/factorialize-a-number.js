// https://www.freecodecamp.com/challenges/factorialize-a-number

function factorialize(num) {
    var result = 1;

    while (num > 0) {
        result *= num;
        num -= 1;
    }

    return result;
}

factorialize(5);