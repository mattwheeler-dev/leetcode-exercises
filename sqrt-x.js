const mySqrt = (x) => {
	// LEFT = VAL USED TO CHECK MATH STARTING AT 0
  let left = 0;
  // RIGHT = GIVEN INT
  let right = x;

  // LOOP WHILE LEFT IS < RIGHT
  while (left <= right) {
    // FIND AND STORE NUM IN MIDDLE OF LEFT AND RIGHT
    const mid = Math.floor((left + right) / 2);

    // RETURN MID IF MATH SHOWS MID IS CURRENTLY NEAREST SQ ROOT INT
    if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
      return mid;
    } 
    // IF MID SQUARED IS LESS THAN X, INCREASE LEFT
    else if (mid * mid < x) {
      left = mid + 1;
    } 
    // IF MID SQUARED IS MORE THAN X, DECREASE RIGHT
    else {
      right = mid - 1;
    }
  };
};
