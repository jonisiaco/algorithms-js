//Kadane's Algorithm: Maximum Subarray Sum

// Problem Statement
// Given an array of integers (which may include negative numbers), 
// find the contiguous subarray (containing at least one number) which has the largest sum.
// Goal: Return the maximum sum of any contiguous subarray.

// Time: O(n) — Only one pass through the array.
// Space: O(1) — Constant space used.

function maxSubarraySum(nums) {
  let maxSum = nums[0];      // Start with the first element
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Either add to previous subarray or start new
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // Update maxSum if needed
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(nums));