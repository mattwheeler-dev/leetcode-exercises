const longestCommonPrefix = (strs) => {
	// IF ARRAY CONTAINS 0 OR 1 ITEM, RETURN EMPTY STRING OR THE ITEM
	if (strs.length == 0 || strs.length == 1) {
		return strs[0] || "";
	};

	// INCREMENT FOR LOOP
	let i = 0;

	// LOOP THRU STRINGS, COMPARING CHARACTERS
	while (strs[0][i] && strs.every((s) => s[i] === strs[0][i])) i++;
	
	// RETURN STRING OF MATCHED CHARACTERS
	return strs[0].substr(0, i);
};
