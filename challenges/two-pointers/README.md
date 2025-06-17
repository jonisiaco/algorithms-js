# Two Pointers Technique - Algorithm Guide

The **two pointers technique** is a fundamental algorithmic strategy used to efficiently solve problems involving arrays, strings, or linked lists. It typically involves using two indices (pointers) that traverse the data structure from different directions or at different speeds.

---

## 🧠 What is the Two Pointers Technique?

Two pointers refers to using **two variables** (often named `left` and `right`) to iterate over a data structure. These pointers help avoid nested loops and reduce time complexity, often from `O(n²)` to `O(n)` or `O(log n)`.

---

## 🔁 Common Use Cases

- Finding a pair with a specific sum in a sorted array
- Removing duplicates
- Moving elements (like zeroes) in place
- Checking if a string is a palindrome
- Merging two sorted arrays or lists
- Sliding window optimizations

---
## 🔁 Advantages of Two Pointers

- More efficient than nested loops.
- Common in interview questions.
- Often leads to O(n) or O(n log n) solutions.

## ✅ Example 1: Pair With Given Sum

```js
function hasPairWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return true;
    if (sum < target) left++;
    else right--;
  }

  return false;
}
