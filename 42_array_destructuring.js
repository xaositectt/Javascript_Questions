'use strict'

//similar to pattern matching in functional languages

let a, b, c, rest
[a, b, c] = [1, 2, 3]

console.log(a, b, c)

// doesn't work like this, you need to declare the variables
// [d, e, f] = [1, 2, 3]

let [d, e, f] = ['d', 'e', 'f']
console.log(d, e, f)

[a, b, c, ...rest] = [1, 2, 3, 4, 5, 6, 7]
console.log(rest)
