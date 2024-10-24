const isPalindrome = (x) => {
    let revX = 0;
    let tempX = x;
    if (x < 0) {
        return false;
    }
    while(tempX > 0) {
        revX = (revX * 10) + (tempX % 10)
        tempX = Math.floor(tempX / 10)
    }
    return revX == x;
};
