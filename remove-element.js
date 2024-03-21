const removeElement = (nums, val) => {
    // NEW ARRAY TO STORE NUMS THAT != VAL
    let newNums = [];

    // LOOP THRU NUMS
    for(const num of nums) {
        // IF A NUM DOES NOT MATCH VAL, PUSH TO NEW ARRAY
        if (num != val) {
            newNums.push(num);
        };
    };

    // LOOP THRU NUMS 
    for (let i = 0; i < nums.length; i ++) {
        // CHANGE NUMS TO CONTAIN ONLY NUMS THAT != VAL
        nums[i] = newNums[i];
    };

    // RETURN NEW NUMS LENGTH / AMT OF NUMS != VAL
    return newNums.length;
};
