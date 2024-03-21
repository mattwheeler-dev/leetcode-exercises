const removeDuplicates = (nums) => {
    // STORE AMT OF UNIQUE VALS
    let k = 0;

    // LOOP THRU ARRAY, COMPARE VALS, REPLACE WITH UNIQUE VALS
    nums.forEach((num) => {
        if (nums[k] !== num) {
            nums[++k] = num;
        };
    });

    // RETURN AMT OF UNIQUE VALS
    return k + 1;
};
