function strStr(haystack, needle) {
  // If needle is empty, by problem definition, return 0
  if (needle.length === 0) return 0;

  // Loop through haystack until there's no room left for needle to fit
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    // Check if substring of haystack starting at i matches needle
    let j = 0;
    for (; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        // Characters don't match, break inner loop and try next i
        break;
      }
    }

    // If we completed the inner loop without a break,
    // it means we found the needle at index i
    if (j === needle.length) {
      return i;
    }
  }

  // If needle not found in haystack, return -1
  return -1;
}

// Example usage:
console.log(strStr("hello", "ll"));  // Output: 2
