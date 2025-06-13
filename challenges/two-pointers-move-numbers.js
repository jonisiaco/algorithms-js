function moveZeroes(nums) {
    let nextNonZero = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) {
            // Swap nums[nextNonZero] and nums[i]
            let temp = nums[nextNonZero];
            nums[nextNonZero] = nums[i];
            nums[i] = temp;
            nextNonZero++;
        }
    }
}

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
