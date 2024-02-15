const twoSum = function (nums, target) {
	// NEW ARRAY TO TEST VALUES AGAINST TARGET
	let mapArray = new Map();

	for (let i = 0; i < nums.length; i++) {
		// SUBTRACT CURRENT VALUE FROM TARGET
		let difference = target - nums[i];

		// IF DIFFERENCE EXISTS, STORE ITS INDEX
		if (mapArray.has(difference)) {
			return [mapArray.get(difference), i];
		}

		// SET NEW ARRAY WITH INDEX VALUES
		mapArray.set(nums[i], i);
	}
};

// TEST CASES
console.log(twoSum([1, 2, 3, 4, 5], 8));
// SHOULD BE [2, 4]

console.log(twoSum([5, 7, 9, 13], 18));
// SHOULD BE [0, 3]
