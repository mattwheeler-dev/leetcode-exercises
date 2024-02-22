const twoSum = (nums, target) => {
	let mapArray = new Map();
	for (let i = 0; i < nums.length; i++) {
		let difference = target - nums[i];
		if (mapArray.has(difference)) {
			return [mapArray.get(difference), i];
		}
		mapArray.set(nums[i], i);
	}
};
