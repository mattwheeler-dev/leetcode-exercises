const isSameTree = (p, q) => {
  // CHECK IF P & Q ARE PRESENT / UNDEFINED
    if (!p || !q) {
      // RETURN TRUE IF SAME, FALSE IF NOT
        return p === q;
    }

  // RECURSIVELY CHECK VALS, LEFTS, & RIGHTS
    if (p.val === q.val && isSameTree(p.left,q.left) && isSameTree(p.right,q.right)) {
      // TRUE IF ALL CHECKED AND SAME
        return true;
    } else {
      // FALSE IF DIFFERENCE FOUND
        return false;
    }
};
