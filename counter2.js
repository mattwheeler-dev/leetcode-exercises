const createCounter = (init) => {
    let count = init;
    return {
        increment: () => {
            return count += 1
        },
        decrement: () => {
            return count -= 1
        },
        reset: () => {
            count = init
            return init
        }
    }
};
