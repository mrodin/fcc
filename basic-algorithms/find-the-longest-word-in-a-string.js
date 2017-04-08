// https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string

function findLongestWord(str) {
    var wordLength = 0;
    var wordArr = str.split(' ');

    for (i = 0; i < wordArr.length; i++) {
        if (wordArr[i].length > wordLength) {
            wordLength = wordArr[i].length;
        }
    }

    return wordLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");