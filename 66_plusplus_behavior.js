'use strict'

//if you use the ++ expression like this, it actually increments and then assigns.
//it goes in order! so first assignment, then ++ ++ then assignment again.
//++a++ throws a referenceerror.
//then the
var a = 42;
var b = a++;

console.log(a);	// 43
// first assigns then increments so b is the original a
console.log(b);	// 42
console.log(a);	// 43

var c = ++a;
// first increments then assigns so you can see the change here
console.log(c);	// 44
