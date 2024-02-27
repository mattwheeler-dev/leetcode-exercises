const searchInsert = (nums, target) => {
    for (let i = 0; i <= nums.length; i++) {
        if((nums[i] === target) || (i === nums.length)) {
            return i;
        } else if (nums[i] < target && nums[i + 1] > target) {
            return i + 1;
        } else if (target < nums[0]) {
            return 0;
        }
    }
};
