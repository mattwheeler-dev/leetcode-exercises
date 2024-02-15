const mergeTwoLists =  (list1, list2) {
	// RETURN OPPOSITE LIST IF ONE IS NULL
	if (!list1 || !list2) {
		return list2 || list1;
	}
	// COMPARE AND RETURN LIST1 VAL IF LOWER
	else if (list1.val <= list2.val) {
		list1.next = mergeTwoLists(list1.next, list2);
		return list1;
	}
	// COMPARE AND RETURN LIST2 VAL IF LOWER
	else if (list2.val <= list1.val) {
		list2.next = mergeTwoLists(list1, list2.next);
		return list2;
	}
	// RECURSION MERGES LISTS IN ASC ORDER
};

// TEST CASES
console.log(
	"Due to how this code was built on LeetCode, it currently returns undefined outside of the LeetCode testing env."
);
