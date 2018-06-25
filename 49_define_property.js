'use strict'

//how to get object property attributes, and how to define them
const obj = { a: 1 };

console.log(Object.getOwnPropertyDescriptor( obj, "a" ));

Object.defineProperty( obj, "b", {
	value: 15,
	writable: true,
	configurable: true,
	enumerable: true
} );

console.log(obj.b);
