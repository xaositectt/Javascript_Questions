'use strict'

// initialization
let daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'); // {3}

//iterators
// The Array class also has a property named @ @iterator
let iterator = daysOfWeek[Symbol.iterator]();

console.log(iterator); // Object [Array Iterator] {}
console.log(iterator.next()); // { value: 'Sunday', done: false }
console.log(iterator.next().value); // Monday
console.log(iterator.next().value); // Tuesday
console.log(iterator.next().value); // Wednesday
console.log(iterator.next().value); // Thursday
console.log(iterator.next().value); // Friday
console.log(iterator.next().value); // Saturday
console.log(iterator.next()); // { value: undefined, done: true }

let iterator2 = daysOfWeek[Symbol.iterator]();


for (const n of iterator2) {
  console.log(n); // logs all days
}

// entries method: returns @@iterator, which contains key/value pairs
let entries = daysOfWeek.entries();
console.log(entries.next().value); // [0, 'Sunday']

// keys method: returns @@iterator, which contains the keys of the array
let keys = daysOfWeek.keys();
console.log(keys.next()); // { value: 0, done: false }

// values method: returns @@iterator, which contains the values of the array
let values = daysOfWeek.values();
console.log(values.next()); // { value: 'Sunday', done: false }
