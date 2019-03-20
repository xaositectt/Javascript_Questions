// sums first n integers

function recSum(num) {
  if (num === 0) {
    return num
  } else {
    return num + recSum(num-1)
  }
}

function recFact(num) {
  if (num <= 1) {
    return 1
  } else {
    return num * recFact(num-1)
  }
}

// 1, 1, 2, 3, 5, 8, 13, 21
function recFibonacci(num) {
  if (num <= 2) {
    return 1
  } else {
    return recFibonacci(num - 1) + recFibonacci(num - 2)
  }
}

console.log(recSum(5))
console.log(recFact(3))
console.log(recFibonacci(6))