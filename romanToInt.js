// STORE ROMAN VALUES IN AN OBJECT
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
	// VARIABLE TO STORE INT VALUE
	let value = 0;

	// LOOP THROUGH NUMERAL GIVEN
	for (i = 0; i < n.length; i++) {
		// IF ROMAN IS LESS THAN THE NEXT ONE, SUBTRACT ITS VALUE INSTEAD OF ADDING
		if (romans[n[i]] < romans[n[i + 1]]) {
			value -= romans[n[i]];
		} else {
			// ADD VALUE OF ROMAN TO INT VALUE
			value += romans[n[i]];
		}
	}

	// RETURN INT VALUE WITH THE VALUE OF THE LAST ROMAN ADDED TO IT
	return value;
};

// TEST CASES
console.log(romanToInt("XIV"));
// SHOULD BE 14

console.log(romanToInt("LXXXVI"));
// SHOULD BE 86
