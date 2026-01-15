const addBinary = (a, b) => {
    // Store possible carry value (0/1)
    let carry = 0;
    // Store and build result
    let result = "";
    // Store max length for leading 0s, init with a.length
    let maxLength = a.length;
    // Find which length is greater, then add leading 0s to shorter string
    if (a.length > b.length){
        b = "0".repeat(a.length - b.length) + b;
    } else {
        maxLength = b.length;
        a = "0".repeat(b.length - a.length) + a;
    };
    // Loop through strings, starting at the end
    for (let i = maxLength - 1; i >= 0; i--){
        // Parse to ints, add them, add carry
        let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
        // Add new value to result
        result = (sum % 2) + result;
        // Find if carry is 1 or 0
        carry = sum >= 2 ? 1 : 0;
    };
    // If carry is true (1), add leading 1
    if (carry){
        result = "1" + result;
    };
    return result;
};
