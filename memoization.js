function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Fetching from cache for:", key);
      return cache[key];
    }
    console.log("Computing result for:", key);
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

function slowFibonacci(n) {
  if (n <= 1) return n;
  return slowFibonacci(n - 1) + slowFibonacci(n - 2);
}

const fastFibonacci = memoize(slowFibonacci);

console.log(fastFibonacci(10));
console.log(fastFibonacci(10));