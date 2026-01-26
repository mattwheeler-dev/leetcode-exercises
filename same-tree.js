const isSameTree = (p, q) => {
  // Check if p & q are present / undefined
    if (!p || !q) {
      // Return true if same, false if not
        return p === q;
    };
  // Recursively check vals, lefts, & rights
    if (p.val === q.val && isSameTree(p.left,q.left) && isSameTree(p.right,q.right)) {
      // Return true if all checked and same
        return true;
    } else {
      // If difference found, return false
        return false;
    };
};
