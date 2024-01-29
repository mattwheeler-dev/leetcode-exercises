// TWO SUM
const twoSum = (nums, target) => {
	let mapArray = new Map();

	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i];
		if (mapArray.has(diff)) {
			return [mapArray.get(diff), i];
		}

		mapArray.set(nums[i], i);
	}
};

// PALINDROME NUMBER
const isPalindrome = (n) => {
	let reverse = 0;
	let num = n;

	while (num > 0) {
		const int = num % 10;
		reverse = reverse * 10 + int;
		num = Math.floor(num / 10);
	}
	return reverse == n;
};

// ROMAN TO INTEGER
const romans = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

const romanToInt = (r) => {
	let val = 0;

	for (let i = 0; i < r.length; i++) {
		if (romans[r[i]] < romans[r[i + 1]]) {
			val -= romans[r[i]];
		} else {
			val += romans[r[i]];
		}
	}

	return val;
};

// LONGEST COMMON PREFIX
const longestCommonPrefix = (strs) => {
	if (strs.length == 0 || strs.length == 1) {
		return strs[0] || "";
	}

	let i = 0;

	while (strs[0][i] && strs.every((s) => s[i] === strs[0][i])) i++;

	return strs[0].substr(0, i);
};

// VALID PARENTHESES
const isValid = (p) => {
	let closers = [];

	for (i = 0; i < p.length; i++) {
		if (p[i] == "{") {
			closers.push("}");
		} else if (p[i] == "[") {
			closers.push("]");
		} else if (p[i] == "(") {
			closers.push(")");
		} else if (p[i] !== closers.pop()) {
			return false;
		}
	}
	return !closers.length;
};

// MERGE SORTED LISTS
let mergeTwoLists = function (list1, list2) {
	if (!list1 || !list2) {
		return list2 || list1;
	} else if (list1.val <= list2.val) {
		list1.next = mergeTwoLists(list1.next, list2);
		return list1;
	} else if (list2.val <= list1.val) {
		list2.next = mergeTwoLists(list1, list2.next);
		return list2;
	}
};
