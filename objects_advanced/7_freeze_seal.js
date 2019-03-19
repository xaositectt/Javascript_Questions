'use strict'

const object1 = {
  property1: 42
}

const object2 = Object.freeze(object1)

try {
  object2.property1 = 33 // Throws an error in strict mode
} catch (e) {
  console.log(e)
}

console.log(object2.property1) // expected output: 42
