const lengthOfLastWord = (s) => {
    // Trim whitespace from ends and split words into array
    let words = s.trim().split(" ");
    // Return length of last word in array
    return words[words.length - 1].length;
};
