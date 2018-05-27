'use strict'

//add an element to the start and end of an array

let array = [2, 3, 4, 5, 6];

array = [1, ...array, 7];

console.log(array);

array.push(8);

array.unshift(0);

console.log(array);
