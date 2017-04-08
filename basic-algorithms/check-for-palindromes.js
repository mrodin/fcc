// https://www.freecodecamp.com/challenges/check-for-palindromes

function palindrome(str) {
    var replacedStr = str.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    var reversedStr = replacedStr.split('').reverse().join('');

    if (replacedStr === reversedStr) {
        return true;
    } else {
        return false;
    }
}

palindrome("1 eye for of 1 eye.");