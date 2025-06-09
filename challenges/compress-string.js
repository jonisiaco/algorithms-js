function compressString(str) {
    // Edge case: empty string
    if (str.length === 0) return str;
  
    let compressed = '';
    let count = 1; // count of current character
  
    for (let i = 1; i <= str.length; i++) {
      if (str[i] === str[i - 1]) {
        count++; // same char as previous, increment count
      } else {
        // Different char or end of string: append previous char and count
        compressed += str[i - 1] + count;
        count = 1; // reset count for new char
      }
    }
  
    // Return original string if compressed string is not shorter
    return compressed.length < str.length ? compressed : str;
  }
  
  // Example:
  console.log(compressString("aabcccccaaa")); // Output: "a2b1c5a3"
  console.log(compressString("abc")); // Output: "abc"
  