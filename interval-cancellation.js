const cancellable = (fn, args, t) => {
    fn(...args);
    const cancelFn = () => { 
        clearInterval(timer);
    };
    const timer = setInterval(() => {
        fn(...args);
    }, t);
    return cancelFn;
};
