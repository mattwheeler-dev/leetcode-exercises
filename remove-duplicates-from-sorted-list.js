const deleteDuplicates = (head) => {
    let newList = head;
    while(newList) {
        if(newList.next !== null && newList.val == newList.next.val) {
            newList.next = newList.next.next;
        } else {
            newList = newList.next;
        }
    }
    return head;
};
