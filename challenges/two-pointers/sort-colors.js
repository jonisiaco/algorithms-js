// Group the numers of the array

function sortColors(nums) {
    let left = 0; 
    let i = 0;
    let right = nums.length - 1;
    while (i <= right) {
        if (nums[i] === 0) {
            const tmp = nums[i];
            nums[i] = nums[left];
            nums[left] = tmp; 
            left += 1;
            i++;
        } else if (nums[i] === 2) {
            //[nums[right], nums[i]] = [nums[i], nums[right]];
            const tmp = nums[i];
            nums[i] = nums[right];
            nums[right] = tmp;
            right -= 1;
        } else {
            i++;
        }
    }
    return nums;
}

const nums = [2,1,2,0,1,0,1,0,1];
console.log(sortColors(nums));