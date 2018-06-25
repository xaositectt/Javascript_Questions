'use strict'

// arrays are copied by reference. this can cause confusion: 

function something(a) {
  a.push(4);

  a = [5, 6, 7];
  a.push(8);
}

let a = [1, 2, 3];

something(a);

//this will output [1, 2, 3, 4], because the a in something(a) is a reassignment, so a copy of the reference.
//but when you reassign it inside the function then the reference to the original array is no longer used.
console.log(a);
