function binarySearch(value, list) {
    let first = 0;
    let last = list.length - 1;
    let position = -1;
    let found = false;
    let middle;

    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) {
            last = middle - 1;

        } else {
            first = middle + 1;

        }
    }
    return position;
}

const result = binarySearch(10,[1,2,3,4,5,6,7,8,9,10]);
console.log('result:', result);