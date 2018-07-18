'use strict'

//this outputs false because numbers in JS are with binary floating point precision
console.log((0.1 + 0.2) == 0.3 );

//what if we need a comparator that works with such numbers?
//JS has a built in tiny number constant for rounding error purposes
console.log(Number.EPSILON);

function numbersCloseEnoughToEqual(n1,n2) {
	return Math.abs( n1 - n2 ) < Number.EPSILON;
}

let a = 0.1 + 0.2;
let b = 0.3;

//logs true
console.log(numbersCloseEnoughToEqual(a, b));
