const isPalindrome = (x) => {
	let reverseX = 0;
	let num = x;
	while (num > 0) {
		const int = num % 10;
		reverseX = reverseX * 10 + int;
		num = Math.floor(num / 10);
	}
	return reverseX == x;
};
