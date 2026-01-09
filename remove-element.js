const removeElement = (nums, val) => {
    // New array to store nums != val
    let tempNums = [];
    for (const num of nums) {
        if (num != val) {
            tempNums.push(num);
        }
    }
    // Replace first x items in nums with tempNums values, after those elements LC doesn't care
    for (let i = 0; i < tempNums.length; i++) {
        nums[i] = tempNums[i];
    }
    // Return amount of nums != val
    return tempNums.length;
};
