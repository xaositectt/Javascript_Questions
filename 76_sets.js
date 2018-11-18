'use strict'

// The Set object lets you store unique values of any type, whether primitive values or object references.
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5));
// expected output: true

console.log(set1.has(6));
// expected output: false

// NaN and undefined can also be stored in a Set.NaN is considered the same as NaN
set1.add(NaN);
set1.add(undefined);
set1.add(NaN);

console.log(set1)

// forEach can be used
// i in this case is the elem again!
set1.forEach((elem, elemagain) => console.log(`the ${elemagain}th elem is`, elem));

// to return a new iterator with the values in insertion order
console.log(set1.values());

// to log the length
console.log(set1.size);

// convert to array

let arr = [...set1];
console.log(arr); // converted to array

arr = Array.from(set1);

console.log(arr); // same thing


// iterating through sets

for (const item of set1) {
  console.log(item);
}
for (const item of set1.keys()) {
  console.log(item);
}
for (const item of set1.values()) {
  console.log(item);
}

const set2 = new Set([0, 1, 2]);
// intersection of two sets
const intersection = new Set([...set1].filter(elem => set2.has(elem)));
console.log(intersection);

// difference of two sets
const diff = new Set([...set1].filter(elem => !set2.has(elem)));
console.log(diff);


// WeakSet is a special kind of Set that does not prevent JavaScript from removing its items from memory.
// WeakSets are collections of objects only and not of arbitrary values of any type.
// References to objects in the collection are held weakly.If there is no other reference to an object
// stored in the WeakSet, they can be garbage collected.That also means that there is no list of current
// objects stored in the collection.

// you can only do this much stuff with weakset. it's only good to check in an object is in the set.
const ws = new WeakSet();
const foo = {};
const bar = {};

console.log(ws.length)

ws.add(foo);
ws.add(bar);

console.log(ws.has(foo)); // true
console.log(ws.has(bar)); // true

ws.delete(foo); // removes foo from the set
ws.has(foo); // false, foo has been removed
