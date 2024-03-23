const addBinary = (a, b) => {
    // STORE POSSIBLE CARRY (0 / 1)
    let carry = 0;
    // STORE AND CREATE RESULT TO RETURN
    let result = "";
    // STORE LENGTH FOR LOOP; INIT AS A.LENGTH
    let maxLength = a.length;

    // IF A IS LONGER, ADD LEADING 0S TO B
    if (a.length > b.length){
        b = "0".repeat(a.length - b.length) + b;
    } 
    // ELSE MAXLENGTH IS B.LENGTH, AND ADD LEADING 0S TO A
    else {
        maxLength = b.length;
        a = "0".repeat(b.length - a.length) + a;
    };

    // LOOP THRU STRINGS
    for (let i = maxLength - 1; i >= 0; i--){
        // PARSE TO INTS, ADD THEM, ADD CARRY, STORE IN VARIABLE
        let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
        
        // ADD NEW BINARY TO RESULT 
        result = (sum % 2) + result;

        // DECIDE IF CARRY IS 1 OR 0
        carry = sum >= 2 ? 1 : 0;
    };

    // IF CARRY IS TRUE (1), ADD LEADING 1
    if (carry){
        result = "1" + result;
    };

    // RETURN RESULTING STRING
    return result;
};
