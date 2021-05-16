// sort method
let numbers = [2, 5, 3, 6, 1];
console.log('sorted numbers', numbers.sort());

// custom sorting function- if a > b, it's positive, if a < b, it's negative
console.log('sorted numbers', numbers.sort((a, b) => a - b));

// same as
console.log(numbers.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
}));

// can create custom sorting method for anything
const friends = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 }, // trailing comma ES2017
];
function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}
console.log('sorted friends', friends.sort(comparePerson)); //sorts by age

let names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort()); // the capitals are before the lowercase names

names = ['Ana', 'ana', 'john', 'John']; // reset array original state
console.log(names.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
})); // now it works properly

names = ['Ana', 'ana', 'john', 'John']; // reset array original state

// or the localeCompare method, works with accented/lowercase etc.
console.log(names.sort((a, b) => a.localeCompare(b)));
