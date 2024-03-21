const strStr = (haystack, needle) => {
    // SEARCH FOR NEEDLE
    if (haystack.includes(needle)) {
        // IF NEEDLE FOUND, RETURN INDEX
        return haystack.indexOf(needle);
    } else {
        // NEEDLE NOT FOUND, RETURN -1
        return -1;
    };
};
