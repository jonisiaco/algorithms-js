function isPairSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return true;
            }
        }
    }
    return false;
}

function twoSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let currentSum = nums[left] + nums[right];

        if (currentSum === target) {
            return true;
        }

        if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}

// The function hasPairWithSum(arr, target) checks whether there exists a pair of numbers
//  in the given array arr that adds up to the specified target sum. It returns true if such a pair exists,
//  otherwise it returns false

function hasPairWithSum(arr, target) {
    let left = 0, right = arr.length - 1;
    arr.sort((a, b) => a - b); // Important for two pointers
    while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum === target) return true;
      if (sum < target) left++;
      else right--;
    }
    return false;
  }
  
  console.log(hasPairWithSum([1, 2, 3, 9], 8)); // returns false (no pair adds to 8)
  console.log(hasPairWithSum([1, 2, 4, 4], 8)); // returns true (4 + 4 = 8)
