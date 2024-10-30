const isValid = (s) => {
    let closers = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            closers.push(")");
        } else if (s[i] == "{") {
            closers.push("}");
        } else if (s[i] == "[") {
            closers.push("]");
        } else if (closers.pop() !== s[i]) {
            return false;
        }
    };
    return !closers.length;
};
