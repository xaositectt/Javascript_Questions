'use strict'

//arrays are objects, so the comparison between two arrays is checking if the references are the same.
//non-strict comparison coerces the array to a string, if compared to a string.

let a = [1, 2, 3];
let b = [1, 2, 3];
let c = '1,2,3';

console.log(a == c); //logs true
console.log(b == c); //logs true
console.log(a == 2); //logs false
