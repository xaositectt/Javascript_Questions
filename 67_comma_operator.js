'use strict'

//the comma operator simply takes the second one out of two statements.
//Every other operator will more tightly bind than , will.

let a = (42, 44);

console.log(a); //logs 44

var b = 42, b;
c = b++, b;

b;	// 43
c;	// 42
