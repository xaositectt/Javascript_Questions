const object1 = {}

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
})

// define a single property
const object2 = {};

Object.defineProperty(object2, 'property1', {
  value: 42,
  writable: false
});

object2.property1 = 77;
// throws an error in strict mode

console.log(object2.property1);
// expected output: 42

console.log(object2.property1)
// expected output: 42

// configurable
// true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
// Defaults to false.

//   enumerable
// true if and only if this property shows up during enumeration of the properties on the corresponding object.
// Defaults to false.

//   value
// The value associated with the property.Can be any valid JavaScript value(number, object, function, etc).
// Defaults to undefined.

//   writable
// true if and only if the value associated with the property may be changed with an assignment operator.
// Defaults to false.

//   get
// A function which serves as a getter for the property, or undefined if there is no getter.The function's return value will be used as the value of the property.
// Defaults to undefined.

//   set
// A function which serves as a setter for the property, or undefined if there is no setter.The function will receive as its only argument the new value being assigned to the property.
// Defaults to undefined.