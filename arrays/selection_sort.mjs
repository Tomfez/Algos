/**
 * Tri par sélection: tri instable de complexité O(n²)
 */
const arr = [11, 15, 22, 1, 3, 6]

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        if (i !== minIndex) {
            const tmp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = tmp;
        }
    }
}

selectionSort(arr);
console.log(arr);