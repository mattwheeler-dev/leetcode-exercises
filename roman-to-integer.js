const romans = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};
const romanToInt = (n) => {
	let value = 0;
	for (i = 0; i < n.length; i++) {
		if (romans[n[i]] < romans[n[i + 1]]) {
			value -= romans[n[i]];
		} else {
			value += romans[n[i]];
		}
	}
	return value;
};
