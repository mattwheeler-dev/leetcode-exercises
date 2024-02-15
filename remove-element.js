const removeElement = (nums, val) => {
    let newNums = [];
    for(const num of nums) {
        if (num != val) {
            newNums.push(num)
        }
    }
    for (let i = 0; i < nums.length; i ++) {
        nums[i] = newNums[i]
    }
    return newNums.length;
};
