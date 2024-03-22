const searchInsert = (nums, target) => {
    // LOOP THRU NUMS ARRAY
    for (let i = 0; i <= nums.length; i++) {
        // IF TARGET FOUND, RETURN INDEX || IF LOOPED ENTIRE ARRAY, RETURN ARRAY LENGTH (NEW ITEM INDEX IF ADDED TO THE END)
        if((nums[i] === target) || (i === nums.length)) {
            return i;
        } 
        // IF CURRENT NUM IS < TARGET AND NEXT NUM IS > TARGET, RETURN CURRENT INDEX + 1
        else if (nums[i] < target && nums[i + 1] > target) {
            return i + 1;
        } 
        // IF TARGET IS < FIRST NUM, RETURN 0
        else if (target < nums[0]) {
            return 0;
        }
    };
};
