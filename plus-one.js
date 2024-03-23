const plusOne = (digits) => {
    // LOOP THRU ARRAY IN REVERSE ORDER
    for (let i = digits.length - 1; i >= 0; i--) {
        // ADD 1 TO CURRENT DIGIT
        digits[i] += 1;
    
        // IF CURRENT DIGIT BECOMES 10, REPLACE WITH 0
        if(digits[i] > 9) {
            digits[i] = 0;
        } 
        // ELSE RETURN CURRENT DIGIT
        else {
            return digits;
        };
    };
    
    // INSERT 1 TO BEGINNING OF DIGITS
    digits.unshift(1);
    
    // RETURN NEW DIGITS
    return digits;
};
