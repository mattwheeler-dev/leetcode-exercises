const twoSum = (nums, target) => {
    // Must return array of the 2 indices
    const result = [];
    // Nested for loops, the inner loop starts 1 index after the outer loop so the outer loop's current number is tested with all remaining numbers
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // If solution is found, push indices to result array and return the array
            if (nums[i] + nums[j] == target) {
                result.push(nums.indexOf(nums[i]));
                result.push(nums.lastIndexOf(nums[j]));
                return result;
            }
        }
    }
};
