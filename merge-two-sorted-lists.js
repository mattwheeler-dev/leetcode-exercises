const mergeTwoLists =  (list1, list2) {
	if (!list1 || !list2) {
		return list2 || list1;
	}
	else if (list1.val <= list2.val) {
		list1.next = mergeTwoLists(list1.next, list2);
		return list1;
	}
	else if (list2.val <= list1.val) {
		list2.next = mergeTwoLists(list1, list2.next);
		return list2;
	}
};
