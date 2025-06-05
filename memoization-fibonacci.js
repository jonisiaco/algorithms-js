// O(n)
// memoization (caching previously computed results)

/*
Pseudocode:

Function fibonacci(n, memo):
    If n ≤ 1:
        Return n

    If n exists in memo:
        Return memo[n]

    memo[n] ← fibonacci(n - 1, memo) + fibonacci(n - 2, memo)

    Return memo[n]
*/

function fibonacci(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

const r = fibonacci(10);
console.log(r);
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55