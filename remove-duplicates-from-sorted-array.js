let removeDuplicates = function(nums) {
    let k = 0;
    nums.forEach((num) => {
        num > nums[k] && (nums[++k] = num)
    });
    return k + 1;
};
