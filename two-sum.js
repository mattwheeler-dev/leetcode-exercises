const twoSum = (nums, target) => {
    const result = [];
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                result.push(nums.indexOf(nums[i]));
                result.push(nums.lastIndexOf(nums[j]));
                return result;
            }
        }
    }
};
