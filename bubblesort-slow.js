// O(n²)
// buble sort slow solution

function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {

    for (let j = 0; j < n - 1 - i; j++) {
      
       if (arr[j] < arr[j + 1]) {

        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]] ;
       } 
    }
  }
  console.log(arr)
  return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr.slice());

function bubbleSortAsc(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] ;
        } 
    }
  }
  console.log(arr)
  return arr;
}

arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSortAsc(arr.slice());