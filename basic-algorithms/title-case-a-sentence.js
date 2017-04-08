// https://www.freecodecamp.com/challenges/title-case-a-sentence

function titleCase(str) {
    var result = [];

    var wordArr = str.toLowerCase().split(' ');
    for (i = 0; i < wordArr.length; i++) {
        result.push(wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1));
    }

    return result.join(' ');
}

titleCase("I'm a little tea pot");