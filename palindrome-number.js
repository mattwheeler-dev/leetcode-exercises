const isPalindrome = (x) => {
	// VARIABLE TO STORE REVERSE X
	let reverseX = 0;

	// VARIABLE TO COPY X VALUE
	let num = x;

	// LOOP THROUGH X VALUE IF GREATER THAN 0
	while (num > 0) {
		// STORE REMAINDER OF CURRENT NUM
		const int = num % 10;
		// ADD REMAINDER TO REVERSE VALUE
		reverseX = reverseX * 10 + int;
		// ENSURE WHOLE NUMBERS AND COMPLETE VALUES
		num = Math.floor(num / 10);
	}

	// RETURN BOOLEAN VALUE OF REVERSE VALUE VS ORIGINAL
	// NEGATIVES WILL ALWAYS BE FALSEY
	return reverseX == x;
};

// TEST CASES
console.log(isPalindrome(12321));
// SHOULD BE TRUE
console.log(isPalindrome(15082));
// SHOULD BE FALSE
