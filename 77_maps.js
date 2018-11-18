const myMap = new Map();

const keyString = 'a string', keyObj = {}, keyFunc = function () {};

// setting the values
console.log(myMap.set(keyString, "value associated with 'a string'"));
console.log(myMap.set(keyObj, 'value associated with keyObj'));
console.log(myMap.set(keyFunc, 'value associated with keyFunc'));

console.log(myMap.size); // 3

// getting the values
console.log(myMap.get(keyString)); // "value associated with 'a string'"
console.log(myMap.get(keyObj)); // "value associated with keyObj"
console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

console.log(myMap.get('a string')); // "value associated with 'a string'"
// because keyString === 'a string'
console.log(myMap.get({})); // undefined, because keyObj !== {}
console.log(myMap.get(function () {})); // undefined, because keyFunc !== function () {}

// even though NaN != NaN, you can't use NaN multiple times as keys.
myMap.set(NaN, 'not a number');

console.log(myMap.get(NaN)); // "not a number"

const otherNaN = Number('foo'); // returns NaN
console.log(myMap.get(otherNaN)); // "not a number"

// logs all the keys and values
for (var [key, value] of myMap) {
  console.log(key + ' = ' + value);
}

// map methods
console.log(myMap);
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());

myMap.delete(NaN);
console.log(myMap);

myMap.clear();
console.log(myMap);


// weak map- Keys of WeakMaps are of the type Object only. Primitive data types as keys are not allowed

const wm1 = new WeakMap(), wm2 = new WeakMap(), wm3 = new WeakMap();
var o1 = {}, o2 = function () {}, o3 = window;

console.log(wm1.set(o1, 37));
console.log(wm1.set(o2, 'azerty'));
console.log(wm2.set(o1, o2)); // a value can be anything, including an object or a function
console.log(wm2.set(o3, undefined));
console.log(wm2.set(wm1, wm2)); // keys and values can be any objects. Even WeakMaps!

console.log(wm1.get(o2)); // "azerty"
console.log(wm2.get(o2)); // undefined, because there is no key for o2 on wm2
console.log(wm2.get(o3)); // undefined, because that is the set value

console.log(wm1.has(o2)); // true
console.log(wm2.has(o2)); // false
console.log(wm2.has(o3)); // true (even if the value itself is 'undefined')

console.log(wm3.set(o1, 37));
console.log(wm3.get(o1)); // 37

console.log(wm1.has(o1)); // true
console.log(wm1.delete(o1));
console.log(wm1.has(o1)); // false
