
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

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"