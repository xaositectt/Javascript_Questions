'use strict'

var person = { age: 18 };
Object.defineProperty(person, 'name', { value: 'Joshua', enumerable: false });

//non-enumerable properties don't show up when you print the object
console.log(person.name); // 'Joshua'
console.log(Object.keys(person)); // ['age']