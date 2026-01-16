const mySqrt = (x) => {
	// Store both ends of the number, 0 and x
	let left = 0;
	let right = x;
	// Loop through the numbers, in range, changing as needed
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		// Return mid as square root, otherwise change the range as needed
    	if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
      		return mid;
    	} else if (mid * mid < x) {
      		left = mid + 1;
    	} else {
      		right = mid - 1;
    	};
  	};
};
