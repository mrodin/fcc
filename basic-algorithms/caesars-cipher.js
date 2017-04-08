// https://www.freecodecamp.com/challenges/caesars-cipher

function rot13(str) {
    var result = [];
    var strArr = str.split("");

    for (i = 0; i < strArr.length; i++) {
        if (strArr[i].charCodeAt(0) >= 65 && strArr[i].charCodeAt(0) <= 77) {
            var charCode = strArr[i].charCodeAt(0);
            result.push(String.fromCharCode(charCode + 13));
        } else if (strArr[i].charCodeAt(0) >= 78 && strArr[i].charCodeAt(0) <= 90) {
            var charCode = strArr[i].charCodeAt(0);
            result.push(String.fromCharCode(charCode - 13));
        } else {
            result.push(strArr[i]);
        }
    }

    return result.join("");
}

rot13("SERR PBQR PNZC");