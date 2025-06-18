// Longest Substring Without Repeating Characters
// Variable-Size (Dynamic) Sliding Window

function longestSubstringWithoutRepeatingChars(s) {
  let seen = new Set();
  let start = 0;
  let maxLen = 0;

  for (let end = 0; end < s.length; end++) {
    console.log(seen.has(s[end]))
    while (seen.has(s[end])) {
      console.log('deleted:', s[start])
      seen.delete(s[start]);
      start++;
    }
    seen.add(s[end]);
    console.log('add end:',s[end])
    maxLen = Math.max(maxLen, end - start + 1);
    console.log('maxlength:', maxLen)
  }

  return maxLen;
}

console.log(longestSubstringWithoutRepeatingChars("abcabcbb"));

// Longest Repeating Character Replacement
// Variable-Size (Dynamic) Sliding Window

function characterReplacement(s, k) {
  const state = {}; // Frequency map
  let maxFreq = 0;
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    state[char] = (state[char] || 0) + 1;
    maxFreq = Math.max(maxFreq, state[char]);

    // If window size is greater than allowed after k replacements, shrink
    while (end - start + 1 > k + maxFreq) {
      const startChar = s[start];
      state[startChar]--;
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(characterReplacement("AABABBA", 1)); // Output: 4