# Sliding Window Pattern

The **Sliding Window** technique is a commonly used approach in algorithm design, especially for solving problems related to **arrays** or **strings** involving **contiguous subsequences**.

---

## 📌 When to Use Sliding Window?

Use the sliding window pattern when you need to:
- Search for a **contiguous subarray or substring**.
- Satisfy certain **constraints** over that segment (length, uniqueness, frequency, etc.).

### ✴️ Decision Guide
- If the window **size is fixed** → use a **Fixed-Length Sliding Window**.
- If the window **size varies based on constraints** → use a **Variable-Length Sliding Window**.

---

## 🔒 Fixed-Size Sliding Window

### ✅ Characteristics
- Window size is **constant** (e.g., `k` elements).
- Slide the window one step at a time.
- Maintain exactly `k` elements in the window at any time.

### 💡 Use Cases
- Problems requiring computations over **every subarray of size k**.

### 🧪 Example Problems
- Maximum sum of a subarray of size `k`.
- Average of every window of size `k`.
- Number of distinct elements in each window of size `k`.

```js
function maxSumFixedWindow(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[i - k + 1]; // remove the element that's sliding out
    }
  }

  return maxSum;
}
```
---

## 🔄 Variable-Size (Dynamic) Sliding Window

### ✅ Characteristics
- Window size can **expand** and **shrink** dynamically.
- Expand the window by moving the **end** pointer.
- Shrink the window by moving the **start** pointer to restore a **valid state**.

### 💡 Use Cases
- Problems involving **longest** or **shortest** substring/subarray under a constraint.

### 🧪 Example Problems
- Longest substring without repeating characters.
- Longest substring with at most `k` distinct characters.
- Longest repeating character substring after replacing at most `k` characters.

```js
function longestUniqueSubstring(s) {
  let seen = new Set();
  let start = 0;
  let maxLen = 0;

  for (let end = 0; end < s.length; end++) {
    while (seen.has(s[end])) {
      seen.delete(s[start]);
      start++;
    }

    seen.add(s[end]);
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}
```
---

## 📋 Summary Table

| Feature              | Fixed-Size Window         | Dynamic-Size Window                      |
|----------------------|----------------------------|-------------------------------------------|
| **Window size**      | Constant (`k`)             | Grows and shrinks as needed               |
| **Maintains**        | Fixed size only            | Valid state or constraint                 |
| **Problem type**     | Max/min over `k` elements  | Longest/shortest valid subarray/substring |
| **Example**          | Max sum of `k` elements    | Longest substring without repeating chars |

---

## 🧠 Examples Recap

- ✅ **Fixed-Size**:
  - Maximum sum of a subarray of size `k`.
  - Average of every window of size `k`.

- ✅ **Variable-Size**:
  - Longest substring without repeating characters.
  - Longest substring with at most `k` distinct characters.
  - Longest repeating character substring after `k` replacements.

---

## 📎 Pro Tip

> When faced with "longest", "shortest", or "at most k", it's a strong signal to try **dynamic-size sliding windows**.
