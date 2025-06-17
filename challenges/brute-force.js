/*
    Approach	    Time    Complexity	Description
    Brute-force     O(n²)	Checks all pairs
*/
function isPairSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return true;
            }
        }
    }
    return false;
}