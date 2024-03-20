const merge = (nums1, m, nums2, n) => {
    nums1.splice(m,n);
    if (nums2 && n > 0) {
        for (let j = 0; j < n; j++) {
            nums1.push(nums2[j]);
        }
    }
    nums1.sort((a, b) => {return a - b});
};
