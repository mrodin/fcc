// https://www.freecodecamp.org/challenges/spinal-tap-case

function spinalCase(str) {
    let result = str.replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/[\s+|_+]/g, "-")
        .toLowerCase();

    return result;
}

spinalCase('AllThe-small Things');