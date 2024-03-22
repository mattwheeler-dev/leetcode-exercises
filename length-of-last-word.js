const lengthOfLastWord = (s) => {
    // TRIM ENDS AND SPLIT INTO AN ARRAY
    const words = (s.trim()).split(' ');
    // POP LAST WORD FROM ARRAY
    const lastWord = words.pop();
    // CREATE ARRAY FROM LAST WORD AND RETURN ITS LENGTH
    return Array.from(lastWord).length;
};
