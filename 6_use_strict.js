'use strict';
const object2 = {}
// doesn't work here apparently...
Object.defineProperty(object2, 'property1', {
  value: 42,
  configurable: false
})
console.log(object2.property1)
delete object2.property1
console.log(object2.property1)
