// merges together two objects
// Properties in the target object will be overwritten by properties in the sources if they have the same key.
// only copies enumerable and own properties
// Both String and Symbol properties are copied.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

// examples: cloning
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }


// it's not deep cloning- copies the reference
let obj1 = { a: 0, b: { c: 0 } };
let obj2 = Object.assign({}, obj1);

obj2.b.c = 3;
console.log(obj1); // this will yield c: 3 too
console.log(obj2);

var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.

// overvrites property values
var ob1 = { a: 1, b: 1, c: 1 };
var ob2 = { b: 2, c: 2 };
var ob3 = { c: 3 };

var ob = Object.assign({}, ob1, ob2, ob3);
console.log(ob); // { a: 1, b: 2, c: 3 };

// prototype properties and non-enumerables can't be assigned
var obb = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
  bar: {
    value: 2  // bar is a non-enumerable property.
  },
  baz: {
    value: 3,
    enumerable: true  // baz is an own enumerable property.
  }
});

var copy = Object.assign({}, obb);
console.log(copy); // { baz: 3 }

var v1 = 'abc';
var v2 = true;
var v3 = 10;
var v4 = Symbol('foo');

var sum = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// only string wrappers can have own enumerable properties.
console.log(sum); // { "0": "a", "1": "b", "2": "c" }
console.log(sum.foo); // undefined
console.log(sum.true); // undefined

// accessors are copied as simple properties
var base = {
  foo: 1,
  get bar() {
    return 2;
  }
};

var copied = Object.assign({}, obj);
console.log(copied); 

// create custom assign function that copies accessors too
function completeAssign(target, ...sources) {
  sources.forEach(source => {
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});
    // by default, Object.assign copies enumerable Symbols too
    Object.getOwnPropertySymbols(source).forEach(sym => {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

var copy = completeAssign({}, obj);
console.log(copy);

