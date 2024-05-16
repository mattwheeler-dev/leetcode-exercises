const isBalanced = (root) => {
    if (!root) return true;
    let height = function(node) {
        if (!node) return 0;
        return 1 + Math.max(height(node.left), height(node.right));
    } 
    return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right);
};
