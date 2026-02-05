const maxDepth = (root) => {
    // Null nodes add 0 to depth
    if (!root) {
        return 0
    }
    //Recursively find max depth of left and right subtrees
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    // Depth is 1 (current node) + largest between left and right depths 
    return 1 + Math.max(left,right)
};
