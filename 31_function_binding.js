'use strict'

// functions lose context in setTimeout and in function expressions
// The function gets invoked at the global scope
// expected output: undefined
let user = {
  firstName: "John",
  sayHi: function() {
    // console.log(`Hello, ${this.firstName}!`);
    return this.firstName;
  }
};

let paige = {
  firstName: "Paige",
}

setTimeout(user.sayHi, 1000); // Hello, undefined!

// let f = user.sayHi.bind;
// console.log(f()); //throws an error because this is undefined!
// using the function outside of its defined this context will make it lose its this value

//with bind you tell the function, what its "this" will be
let boundF = user.sayHi.bind(user);
setTimeout(function() {console.log(boundF())}, 1000);

boundF = user.sayHi.bind(paige);
setTimeout(function(){console.log(boundF())}, 1000);

// you can also use call
// that binds the function to the object for the duration of this one execution
setTimeout(function(){console.log(user.sayHi.call(paige))}, 1000)
