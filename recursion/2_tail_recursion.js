// you pass the results to your next step, and return the main function
// in the form of return function(xyz, ..., ...)
// you can avoid stack overflow with this
function tailRecSum(num, sum = 0) {
  if (num === 0) {
    return sum
  } else {
    return tailRecSum(num - 1, sum + num)
  }
}

function tailRecFact(num, fact = 1) {
  if (num <= 1 ) {
    return fact
  } else {
    return tailRecFact(num - 1, fact * num)
  }
} 

// 1, 1, 2, 3, 5, 8, 13, 21
function tailRecFibonacci(index, numOne = 0, numTwo = 1) {
  if (index === 1) {
    return numTwo
  } else {
    return tailRecFibonacci(index - 1, numTwo, numOne + numTwo)
  }
}

console.log(tailRecSum(3))
console.log(tailRecFact(10))
console.log(tailRecFibonacci(8))
