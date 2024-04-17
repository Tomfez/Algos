/**
 * Tri par insertion: tri stable de complexité O(n²)
 */
const arr = [11, 15, 22, 1, 3, 6]

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const currentValue = arr[i];
        let j;

        for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentValue;
    }
}

insertionSort(arr);
console.log(arr);