// foreach: execute function once per iteration, no return value

let arr = [1, 2, 3, 4, 5];

let logMe = value => console.log(value);

arr.forEach(logMe); // logs 1 2 3 4 5

// default arguments are: value, index, whole array

let logEverything = (value, i, arr) => console.log(value, i, arr);

arr.forEach(logEverything);

// you can also use an argument to substitute the this value inside the callback function

let value = { num: 13 };

let addToObjectValue = function(num){
  console.log(this.num + num);
}

// arr.forEach(addToObjectValue); // logs NaN because this.num is undefined- this is the global object
// only works with regular function, not with arrow function!
// arrow function inherits the this value from its outer context.
arr.forEach(addToObjectValue, value); // logs value + 13

