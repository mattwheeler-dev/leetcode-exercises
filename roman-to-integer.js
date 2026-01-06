// Store roman values in object
const romans = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}
const romanToInt = (s) => {
    let result = 0;
    // Loop through roman numerals
    for (let i = 0; i < s.length; i++) {
        // Check if numeral's value is more or less than the next
        // If less than next, subtract from result. If more than next, add to result
        if (romans[s[i]] < romans[s[i + 1]]) {
            result -= romans[s[i]];
        } else {
            result += romans[s[i]];
        }
    }
    return result;
};
