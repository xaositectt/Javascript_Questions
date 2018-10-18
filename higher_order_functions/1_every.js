// the every function accepts an anonymous function, and tests
// whether every member of the array satisfies a condition
// returns boolean

let arr = [1, 2, 3, 4, 5, 6, 7];

let conditionEven = num => num % 2 == 0;
let conditionInt = num => num % 1 == 0;

console.log(arr.every(conditionEven)); // logs false
console.log(arr.every(conditionInt)); // logs true
