// STORE ROMAN VALUES IN OBJECT
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
	// STORE TOTAL
	let total = 0;
	// LOOP THRU GIVEN ROMAN
	for (i = 0; i < n.length; i++) {
		// IF CURRENT ROMAN IS LESS THAN THE NEXT, SUBTRACT IT
		if (romans[n[i]] < romans[n[i + 1]]) {
			total -= romans[n[i]];
		} 
		// ELSE ADD TO TOTAL
		else {
			total += romans[n[i]];
		}
	}

	// RETURN TOTAL AFTER LOOP IS COMPLETE
	return total;
};
