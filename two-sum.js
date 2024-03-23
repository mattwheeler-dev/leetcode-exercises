const twoSum = (nums, target) => {
	// MAP ARRAY FOR STORING AND CHECKING VALS
	let mapArray = new Map();

	// LOOP THRU NUMS
	for (let i = 0; i < nums.length; i++) {
		// STORE DIFF OF TARGET - CURRENT VAL 
		let difference = target - nums[i];

		// IF MAP HAS DIFF, RETURN INDEX OF DIFF AND CURRENT VAL
		if (mapArray.has(difference)) {
			return [mapArray.get(difference), i];
		};

		// ANSWER HAS NOT BEEN FOUND, SET VALS INTO MAP
		mapArray.set(nums[i], i);
	};
};
