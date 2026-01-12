const searchInsert = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        // If target is found, or is less than current value, return index
        if (target <= nums[i]) {
            return i;
        };
    };
    // If target was never less than a value, return nums length because it would be added to the end
    return nums.length;
};
