'use strict'

// when you create a primitive value and use a method on it, the JS engine actually wraps it in an object

let str = 'Paige'

console.log(str.toUpperCase())

// by usting Object.protype.toStrimg.call() you can see the internal [[Class]] property.
// each of the simple primitives are automatically boxed by their respective object wrappers

console.log(Object.prototype.toString.call([1, 2, 3]))
console.log(Object.prototype.toString.call(42))
console.log(Object.prototype.toString.call(false))
console.log(Object.prototype.toString.call(undefined))
console.log(Object.prototype.toString.call(null))


// gotchas
var a = new Boolean( false )

if (!a) {
	console.log( "Oops" ) // never runs, because the a created this way is an object that is a truthy value!
}

var x = "abc"
var y = new String( a )
var z = Object( a )

console.log(typeof x) // "string"
console.log(typeof y) // "object"
console.log(typeof z) // "object"

console.log(y instanceof String) // true
console.log(z instanceof String) // true

Object.prototype.toString.call( y ) // "[object String]"
Object.prototype.toString.call( z ) // "[object String]"

//unboxing- to get the value of the wrapper 

var ab = new String( "abc" )
var bc = new Number( 42 )

console.log(ab.valueOf())
console.log(bc.valueOf())
