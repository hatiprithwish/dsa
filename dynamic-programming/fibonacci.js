const fibonacciMemoization = (n, memo = {}) => {
  if (n <= 1) {
    return n;
  }
  if (memo[n]) {
    return memo[n];
  }

  memo[n] =
    fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);

  return memo[n];
};
console.log(fibonacciMemoization(6));

const fibonacciTubulation = (n) => {
  if (n <= 1) {
    return n;
  }

  let a = 0,
    b = 1,
    next;
  for (let i = 2; i <= n; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  return b;
};
console.log(fibonacciTubulation(6));
