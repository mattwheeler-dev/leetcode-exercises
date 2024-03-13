const climbStairs = (n) => {
    if (n <= 3) {
        return n;
    }
    let first = 1;
    let second = 1;
    let next = 0;
    for (let i = 2; i <= n; i++) {
        next = first + second;
        first = second;
        second = next;
    }
    return next;
};
