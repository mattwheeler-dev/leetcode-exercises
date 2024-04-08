const isSymmetric = (root) => {
    let stack1 = [root.left];
    let stack2 = [root.right];

    while (stack1.length > 0 && stack2.length > 0) {
        let n1 = stack1.pop();
        let n2 = stack2.pop();
      
        if (!n1 && !n2) {
            continue;
        };
      
        if (!n1 || !n2 || n1.val !== n2.val) {
            return false;
        };
      
        stack1.push(n1.left);
        stack1.push(n1.right);
        stack2.push(n2.right);
        stack2.push(n2.left);
    };
  
    return true;
};
