const tableau = new Array(100).fill().map((x, i) => i + 1);
const numToGuess = Math.floor(Math.random() * 100);

console.log("numToGuess : ", numToGuess);

function simpleSearch(tableau, numToGuess) {
    for (let i = 0; i < tableau.length; i++) {
        if (i === numToGuess)
            return i;
    }
}

const res = simpleSearch(tableau, numToGuess);
console.log("result : ", res);