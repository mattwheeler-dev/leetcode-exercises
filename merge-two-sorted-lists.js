const mergeTwoLists =  (list1, list2) => {
	// IF EITHER LIST DOES NOT EXIST, RETURN THE OTHER
	if (!list1 || !list2) {
		return list2 || list1;
	}
	// COMPARE VALS AND RETURN LOWER ONE
	else if (list1.val <= list2.val) {
		list1.next = mergeTwoLists(list1.next, list2);
		return list1;
	}
	else if (list2.val <= list1.val) {
		list2.next = mergeTwoLists(list1, list2.next);
		return list2;
	}
	// RECURSION WILL MERGE THE LISTS IN ASCENDING ORDER
};
