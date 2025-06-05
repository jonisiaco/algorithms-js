//Consecutive Sum of all Numbers formula

//serie= (n/2)(n+1)

function sumAllNumbersFromOne(n) {
  return (n / 2) * (n + 1);
}
console.log('sum All Numbers starting from 1', sumAllNumbersFromOne(10));


function sumAllNumbersFromN(s,n) {
  // Consecutive lenght
  const lenght = n - s + 1;
  return (lenght/ 2) * (s + n);
}
console.log('sum all numbers from n', sumAllNumbersFromN(20,30));
