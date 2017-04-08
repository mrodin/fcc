// https://www.freecodecamp.com/challenges/truncate-a-string

function truncateString(str, num) {
    var result = "";

    if (str.length > num) {
        if (num <= 3) {
            result = str.slice(0, num) + "...";
        } else {
            result = str.slice(0, num - 3) + "...";
        }
    } else {
        result = str;
    }

    return result;
}

truncateString("Absolutely Longer", 2);