'use strict'

// functions lose context in setTimeout and in function expressions
// The function gets invoked at the global scope
// expected output: undefined
let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

let paige = {
  firstName: "Paige",
}

setTimeout(user.sayHi, 1000); // Hello, undefined!

let f = user.sayHi;
setTimeout(f, 1000); //Hello, undefined!

//with bind you tell the function, what its "this" will be
let boundF = user.sayHi.bind(user);
setTimeout(boundF, 1000);

boundF = user.sayHi.bind(paige);
setTimeout(boundF, 1000);
