/* inputs:
values = [20, 30, 15, 25, 10]
weights = [6, 13, 5, 10, 3]
k = 20
*/

const knapsack = (values, weights, k, i = 0) => {
  if (i === 0) return 0;
  if (k < 0) return -1;

  result = Math.max(
    values[i] + knapsack(values, weights, k - weights[i], i + 1),
    knapsack(values, weights, k, i + 1)
  );
};

// testttttttttttttttt
