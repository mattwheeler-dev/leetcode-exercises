const merge = (nums1, m, nums2, n) => {
    // nums1 initial length is m + n, so remove the trailing 0s and keep the "real" nums1
    nums1.splice(m,n);
    // If nums2 exists, push all of its elements into nums1
    if (nums2 && n > 0) {
        for (let j = 0; j < n; j++) {
            nums1.push(nums2[j]);
        };
    };
    // Sort all elements, default sorting would cause errors so pass a numerical comparison function
    nums1.sort((a, b) => {return a - b});
};
