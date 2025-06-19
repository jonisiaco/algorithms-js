

function twoSum(numbers, target) {
    const nums = numbers.map((n, idx) => [n,idx]);
    nums.sort((a,b) => a[0] - b[0]);

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let currentSum = nums[left][0] + nums[right][0];

        if (currentSum === target) {
            return [ nums[left][1] , nums[right][1] ];
        }

        if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}
const nums = [7, 2, 5, 4, 1, 9];
const target = 10;

const result = twoSum(nums, target);
console.log("sum of indexes:", result);
console.log("[7, 2, 5, 4, 1, 9] = 1 + 9 = 10");


// The function hasPairWithSum(arr, target) checks whether there exists a pair of numbers
//  in the given array arr that adds up to the specified target sum. It returns true if such a pair exists,
//  otherwise it returns false

function hasPairWithSum(arr, target) {
    let left = 0, right = arr.length - 1;
    arr.sort((a, b) => a - b); // Required for two-pointer
    while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum === target) return true;
      if (sum < target) left++;
      else right--;
    }
    return false;
  }
  
  console.log('no pair adds to 8:', hasPairWithSum([1, 2, 3, 9], 8)); // returns false (no pair adds to 8)
  console.log('4 + 4 = 8', hasPairWithSum([1, 2, 4, 4], 8)); // returns true (4 + 4 = 8)
