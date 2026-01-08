const removeDuplicates = (nums) => {
    // Track position of last unique value found
    let k = 0;
    // Start loop at index 1 because index 0 will always be unique
    for (let i = 1; i < nums.length; i++) {
        // If current number is different from the last, move k to next write position and store new unique value at that position
        if (nums[i] !== nums[k]) {
            k++;
            nums[k] = nums[i];
        }
    }
    // Add 1 to k since k is the index of the last unique value found and we need to return the amount of unique values
    return k + 1;
};
