function groupAnagrams(strs) {
  const map = new Map();

  for (const word of strs) {
    // Sort the word alphabetically
    const sorted = word.split('').sort().join('');
    
    // If the key doesn't exist, initialize it with an empty array
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }

    // Push the original word to the correct group
    map.get(sorted).push(word);
  }

  // Return all grouped anagrams as an array of arrays
  return Array.from(map.values());
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));

//Output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
