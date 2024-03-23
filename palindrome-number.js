const isPalindrome = (x) => {
	// STORE REVERSE VERSION
	let reverseX = 0;
	// STORE ORIGINAL VAL
	let num = x;

	// LOOP NUM IF > 0 (ALL NEGATIVE NUMS FAIL)
	while (num > 0) {
		// STORE RIGHT-MOST INT
		const int = num % 10;

		// MULTIPLY REVERSE VERSION AND PLACE INT TO CREATE REVERSE VERSION OF X
		reverseX = reverseX * 10 + int;

		// REMOVE RIGHT-MOST INT FROM NUM
		num = Math.floor(num / 10);
	};

	// RETURN TRUE / FALSE BASED ON REVERSE ORDER MATCHING ORIGINAL
	return reverseX == x;
};
