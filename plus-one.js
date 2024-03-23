const plusOne = (digits) => {
    // LOOP THRU ARRAY IN REVERSE ORDER
    for (let i = digits.length - 1; i >= 0; i--) {
        // ADD 1 TO CURRENT DIGIT
        digits[i] += 1;
    
        // IF CURRENT DIGIT BECOMES 10, REPLACE WITH 0 (CARRY THE 1)
        if(digits[i] > 9) {
            digits[i] = 0;
        } 
        // ELSE RETURN DIGITS
        else {
            return digits;
        };
    };
    
    // INSERT THE CARRIED 1 TO BEGINNING OF DIGITS
    digits.unshift(1);
    
    // RETURN DIGITS AFTER CARRIED 1 IS ADDED
    return digits;
};
