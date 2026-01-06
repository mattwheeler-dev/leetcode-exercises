const isPalindrome = (x) => {
    // Build and store reversed version of x
    let revX = 0;
    // Duplicate x in order to mutate while keeping original
    let tempX = x;
    // Negatives cannot be palindrome so return false if negative
    if (x < 0) {
        return false;
    }
    // Remove last digit from tempX and place on the end of revX until tempX is gone
    while(tempX > 0) {
        revX = (revX * 10) + (tempX % 10)
        tempX = Math.floor(tempX / 10)
    }
    // Check if reversed version matches original x
    return revX == x;
};
