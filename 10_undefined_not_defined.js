'use strict'

//what is the difference between not defined and undefined?
//not defined variable: throws a ReferenceError because the variable is not defined
//console.log(x);

let myObject = {};

//non-existing property of an object is undefined.
console.log(myObject.what);

//you can check if the object has that particular property this way
console.log(myObject.hasOwnProperty('what'));
