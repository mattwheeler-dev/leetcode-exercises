const isSymmetric = (root) => {
    // Use two stacks to traverse the left and right subtrees in mirrored order
    let stack1 = [root.left];
    let stack2 = [root.right];
    // Loop while both stacks still have nodes to compare
    while (stack1.length > 0 && stack2.length > 0) {
        // Pop one node from each stack
        let n1 = stack1.pop();
        let n2 = stack2.pop();
        // If both nodes are null, this position is symmetric so we move on to the next pair
        if (!n1 && !n2) {
            continue;
        }
        // If only one node is null OR the values differ, the tree cannot be symmetric
        if (!n1 || !n2 || n1.val !== n2.val) {
            return false;
        }
        // Push children in mirrored order:
        // Left subtree: left then right
        // Right subtree: right then left
        stack1.push(n1.left);
        stack1.push(n1.right);
        stack2.push(n2.right);
        stack2.push(n2.left);
    }
    // If we finish comparing all node pairs without mismatches, the tree is symmetric
    return true;
};
