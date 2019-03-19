'use strict'

//spread operator allows to spread enumerable variables 

function sum(x, y, z) {
  return x + y + z
}

const numbers = [1, 2, 3]

console.log(sum(...numbers))
// expected output: 6

console.log([...numbers, 4, 5, 6])

//can be used multiple times

console.log(sum(...[0, 1], ...[0])) //logs 1

//to use with new:
let dateFields = [1970, 0, 1]  // 1 Jan 1970
let d = new Date(...dateFields)
console.log(d)

//concatenate arrays
let sumArray = [...[1, 2, 3], ...[4, 5, 6]]
console.log(sumArray)

//to easily copy an array
let b = [...numbers]
console.log(b)

//copy objects, merge objects
var obj1 = { foo: 'bar', x: 42 }
var obj2 = { foo: 'baz', y: 13 }

var clonedObj = { ...obj1 }
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 }
// Object { foo: "baz", x: 42, y: 13 }