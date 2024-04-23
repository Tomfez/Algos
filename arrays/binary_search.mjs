const tableau = new Array(100).fill().map((x, i) => i + 1);
const numToGuess = Math.floor(Math.random() * 100);
let numberOfTries = 0;

console.log("numToGuess : ", numToGuess);

function binarySearch(tableau, numToGuess) {
    let min = 0;
    let max = tableau.length - 1;

    while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        numberOfTries++;

        if (tableau[mid] > numToGuess) {
            max = mid - 1;
        }
        else if (tableau[mid] < numToGuess) {
            min = mid + 1;
        }
        else {
            return mid;
        }
    }
}

const res = binarySearch(tableau, numToGuess);
console.log("result : ", res);
console.log("number of tries : ", numberOfTries);