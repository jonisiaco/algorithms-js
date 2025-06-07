
// Two-pointer Technique (Manual Reversal)
function reverseString(s) {
  let chars = s.split('');
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    // Swap characters
    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }

  return chars.join('');
}

console.log(reverseString("hello")); // Output: "olleh"

// Two-pointer Technique
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Example usage:
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false

// Time Complexity: O(n²)
// Space Complexity: O(1)
function longestPalindrome(s) {
  if (!s || s.length < 1) return "";

  let start = 0, end = 0;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // Return length of the palindrome found
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(i, i);       // Odd-length palindromes
    let len2 = expandAroundCenter(i, i + 1);   // Even-length palindromes
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.slice(start, end + 1);
}

// Example usage:
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // Output: "bb"

