const lengthOfLastWord = (s) => {
    const words = (s.trim()).split(' ');
    const lastWord = words.pop();
    return Array.from(lastWord).length;
};
