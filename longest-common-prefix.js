const longestCommonPrefix = (strs) => {
	// CHECK FOR ARRAY CONTAINING <= 1 WORD, RETURN WORD OR EMPTY STRING
	if (strs.length == 0 || strs.length == 1) {
		return strs[0] || "";
	}

	// INITIALIZING AS INDEX FOR WHILE LOOP
	let i = 0;

	// WHILE EACH STRING HAS THE SAME CHARACTER AT THE SAME INDEX, CONTINUE
	while (strs[0][i] && strs.every((s) => s[i] === strs[0][i])) i++;

	// RETURN SUBSTRING UP TO THE LAST SUCCESSFUL CHECK
	return strs[0].substr(0, i);
};

// TEST CASES
console.log(longestCommonPrefix(["grab", "grand", "grape"]));
// SHOULD BE "gra"
console.log(longestCommonPrefix(["flower", "dog", "house"]));
// SHOULD BE "" / <EMPTY STRING>
