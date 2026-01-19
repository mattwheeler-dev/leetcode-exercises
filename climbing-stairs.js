const climbStairs = (n) => {
    // For 1, 2, or 3 steps, the answer is literally "n" ways.
    if (n <= 3) {
        return n;
    }
    // These two variables track the number of ways to reach the previous step (second) and the step before that (first).
    // We start them at 1 because there's exactly 1 way to stand on step 0 or step 1.
    let first = 1;
    let second = 1;
    // Hold the number of ways to reach the current step
    let next = 0;
    // Start loop at step 2
    for (let i = 2; i <= n; i++) {
        // To get to current step, you either came from 1 or 2 steps back so add both
        next = first + second;
        // Move forward, so first becomes the new second and second becomes the new next
        first = second;
        second = next;
    }
    // After looping, next is the number of ways to reach n steps
    return next;
};
