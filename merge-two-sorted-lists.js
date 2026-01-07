const mergeTwoLists = (list1, list2) => {
    // Temporary starting node
    const temp = { val: -1, next: null};
    let current = temp;
    // While the lists both still have nodes, compare nodes and keep the lowest one
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    };
    // Add the remaining nodes from whichever list is not empty
    current.next = list1 || list2;
    return temp.next;
};
