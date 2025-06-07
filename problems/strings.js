
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

// Two-Pointer Technique
console.log(reverseString("hello")); // Output: "olleh"

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
