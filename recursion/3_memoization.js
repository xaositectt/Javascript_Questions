// 1, 1, 2, 3, 5, 8, 13, 21, 34
function fibonacciMemoization(n) {
  const memo = {}
  function fibonacci(num) {
    if (memo[num] === !undefined) {
      return memo[num]
    } else {
      if (num <= 2) {
        return 1
      } else {
        return memo[num] = fibonacci(num - 1) + fibonacci(num - 2)
      }
    }
  }
  return fibonacci(n)
}

console.log(fibonacciMemoization(6))
console.log(fibonacciMemoization(7))
console.log(fibonacciMemoization(8))
console.log(fibonacciMemoization(9))