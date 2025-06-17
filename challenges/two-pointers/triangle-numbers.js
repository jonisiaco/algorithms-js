/*
  ****Triangle Numbers****

  Write a function to count the number of triplets in an integer array nums that could form the sides of a triangle. 
  The triplets do not need to be unique.
  Input:
  nums = [11,4,9,6,15,18]
  Output:
  10
*/

function triangleNumber(nums) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order

  let count = 0;
  for (let i = nums.length - 1; i >= 2; i--) {
    let left = 0;
    let right = i - 1;

    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        count = count + right - left;
        right--;
      } else {
        left++;
      }
    }
  }

  return count;
}

const nums = [11,4,9,6,15,18];
console.log(triangleNumber(nums));