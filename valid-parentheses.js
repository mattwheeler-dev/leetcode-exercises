const isValid = (parens) => {
	// STORE CLOSING PARENS IN ARRAY
	let closers = [];
	
	// LOOP THRU GIVEN PARENS
	for (let i = 0; i < parens.length; i++) {
		// DETERMINE PAREN TYPE & PUSH CLOSED VERSION TO ARRAY
		if (parens[i] == "{") {
			closers.push("}");
		} else if (parens[i] == "[") {
			closers.push("]");
		} else if (parens[i] == "(") {
			closers.push(")");
		} 
		// IF CLOSING PAREN, COMPARE TO CLOSERS ARRAY TO CHECK FOR CORRECT ORDER / AMOUNT
		else if (closers.pop() !== parens[i]) {
			return false;
		}
	};
	
	// RETURN IF CLOSERS ARRAY EXISTS, IT SHOULD NOT IF INPUT WAS VALID
	return !closers.length;
};
