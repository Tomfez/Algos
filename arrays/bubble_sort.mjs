/**
 * Tri à bulles: tri stable de complexité O(n²)
 */
const arr = [11, 15, 22, 1, 3, 6]

function bubbleSort(arr) {
    let length = arr.length;
    let swap;

    do {
        swap = false;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                const tmp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = tmp;
                swap = true;
            }
        }
        length--;
    } while (swap);
}

bubbleSort(arr);
console.log(arr);