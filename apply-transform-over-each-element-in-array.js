const map = (arr, fn) => {
    const newArr = [];
    arr.forEach((item, i) => {
        newArr.push(fn(item, i))
    });
    return newArr;
};
