const longestCommonPrefix = (strs) => {
	if (strs.length == 0 || strs.length == 1) {
		return strs[0] || "";
	}
	let i = 0;
	while (strs[0][i] && strs.every((s) => s[i] === strs[0][i])) i++;
	return strs[0].substr(0, i);
};
