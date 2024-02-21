const isValid = (parens) => {
	let closers = [];
	for (let i = 0; i < parens.length; i++) {
		if (parens[i] == "{") {
			closers.push("}");
		} else if (parens[i] == "[") {
			closers.push("]");
		} else if (parens[i] == "(") {
			closers.push(")");
		}
		else if (closers.pop() !== parens[i]) {
			return false;
		}
	}
	return !closers.length;
};
