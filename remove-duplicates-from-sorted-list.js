const deleteDuplicates = (head) => {
    // Create a pointer at the head of the list, use the pointer to walk through the list and clean up duplicates
    let newList = head;
    // Loop through the list one node at a time
    while(newList) {
        // Check if next node is present and equal to current node (it's a sorted list so duplicates will be adjacent)
        if(newList.next !== null && newList.val == newList.next.val) {
            // If nodes match, skip the next one entirely and change current.next to the node after that, removing the duplicate from the list
            newList.next = newList.next.next;
        } else {
            // Not duplicates? Then proceed to the next node
            newList = newList.next;
        }
    }
    // Head has not changed, but duplicates have been cleaned out so we can return head
    return head;
};
