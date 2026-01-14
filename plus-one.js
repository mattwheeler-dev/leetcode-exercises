const plusOne = (digits) => {
    // Loop through array, starting at the end
    for (let i = digits.length - 1; i >= 0; i --) {
        // Add 1 to each integer
        digits[i] += 1;
        // If integer becomes 10, change to 0 and carry the 1
        if (digits[i] > 9) {
            digits[i] = 0;
        } else {
            // Return array
            return digits;
        }
    }
    // Add carried one and return array
    digits.unshift(1);
    return digits;
};
