const strStr = (haystack, needle) => {
    // Check for needle in haystack
    if (haystack.includes(needle)) {
        // If needle found, return index
        return haystack.indexOf(needle);
    } else {
        // Needle not found, return -1
        return -1;
    };
};
