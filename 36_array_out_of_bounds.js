'use strict'

//what happens when you reference an out of bounds element?
let a = [1, 2, ,3]

console.log(a[5]) //returns undefined

a[6] = 7

console.log(a[6])
console.log(a[5])

console.log(a.map(element => 7)) //displays <empty item> where the element is undefined.
