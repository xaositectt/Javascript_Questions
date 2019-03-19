'use strict'

let arr = [1, 2, 3, 4]

let obj = {
  0: 'Paige',
  1: 'Leila',
  [Symbol.isConcatSpreadable]: true,
  length: 2
}

console.log(arr.concat(obj))
