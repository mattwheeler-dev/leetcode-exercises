const removeDuplicates = (nums) => {
    // STORE AMT OF UNIQUE VALS
    let k = 0;

    // LOOP THRU ARRAY, COMPARE VALS, REPLACE WITH UNIQUE VALS
    nums.forEach((num) => {
        num > nums[k] && (nums[++k] = num)
    });

    // RETURN AMT OF UNIQUE VALS
    return k + 1;
};
