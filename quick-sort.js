// O(n log n) - Log-lineal
// Quick sort

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const lastItem = arr[arr.length - 1]
    let left = [];
    let right = [];    

    for ( let i = 0; i < arr.length - 1 ; i++) {
        if (arr[i] < lastItem) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat([lastItem], quickSort(right));

}

// Example usage
const arr = [5, 3, 8, 4, 2, 7, 1, 10];
const sorted = quickSort(arr);
console.log(sorted);