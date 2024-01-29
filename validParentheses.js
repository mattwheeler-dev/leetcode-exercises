const isValid = (parens) => {
	// ARRAY TO STORE EXPECTED CLOSING PARENS
	let closers = [];

	// LOOP THRU STRING GIVEN
	for (let i = 0; i < parens.length; i++) {
		// ADD CLOSING PARENS TO ARRAY FOR CHECKING
		if (parens[i] == "{") {
			closers.push("}");
		} else if (parens[i] == "[") {
			closers.push("]");
		} else if (parens[i] == "(") {
			closers.push(")");
		}
		// FIND CLOSING PARENS AND COMPARE TO ARRAY
		else if (closers.pop() !== parens[i]) {
			return false;
		}
	}
	// RETURN CLOSERS.LENGTH BOOLEAN (! TO NEGATE THE 0 = FALSE DEFAULT)
	return !closers.length;
};

// TEST CASES
console.log(isValid("{}[]()"));
// SHOULD BE TRUE

console.log(isValid("{[(])}"));
// SHOULD BE FALSE
