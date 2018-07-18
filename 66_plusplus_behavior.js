'use strict'

//if you use the ++ expression like this, it actually increments and then assigns.
//it goes in order! so first assignment, then ++ ++ then assignment again.
//++a++ throws a referenceerror.
//then the 
var a = 42;
var b = a++;
var c = ++a;

console.log(a);	// 44
console.log(b);	// 42
console.log(c);	// 44
