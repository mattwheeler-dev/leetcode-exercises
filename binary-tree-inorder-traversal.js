const inorderTraversal = (root) => {
    // Store final inorder sequence
    let result = [];
    // Stack can help simulate recursion and backtrack up the tree
    let stack = [];
    // Loop while there is a current node, or nodes waiting in the stack
    while (root || stack.length) {
        if (root) {
            // Keep going to the left, pushing nodes to stack so we can visit them later
            stack.push(root);
            root = root.left;
        } else {
            // If we've run out of left child nodes, start backtracking and pop the most recent node that still has work left
            root = stack.pop();
            // In inorder traversal, we visit the node *after* we've processed its entire left subtree
            result.push(root.val);
            // Then move to the right subtree and repeat the process.
            root = root.right;
        }
    }
    // Omce the stack is empty and we've exhausted all branches, traversal is complete
    return result;
};
