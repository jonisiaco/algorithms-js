/* 
    Fixed-Size Sliding Window

    DESCRIPTION:
    Given an array of integers nums and an integer k, find the maximum sum of any contiguous subarray of size k.
*/

function maxSum(nums, k) {
    let curSum = 0;
    
    for (let i = 0; i < k; i++) {
        curSum += nums[i];
    }
    let maxSum = curSum;
    
    for (let i = k; i < nums.length; i++) {
        curSum += nums[i];
        curSum -= nums[i - k];
        maxSum = Math.max(maxSum, curSum);
    }

    return maxSum;
}

const nums = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSum(nums, k)); // output: 9. Sum(5, 1, 3)