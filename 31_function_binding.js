'use strict'
// functions lose context in setTimeout and in function expressions
// The function gets invoked at the global scope
// expected output: undefined

let user = {
  firstName: "John",
  sayHi: function() {
    // console.log(`Hello, ${this.firstName}!`)
    console.log(this.firstName)
  }
}
user.sayHi()

let paige = {
  firstName: "Paige",
}

setTimeout(user.sayHi, 1000) // Hello, undefined!
setTimeout(user.sayHi.bind(user), 1000) // works

// using the function outside of its defined this context will make it lose its this value
//with bind you tell the function, what its "this" will be
let boundF = user.sayHi.bind(user)
setTimeout(boundF, 1000)

// logs Paige
boundF = user.sayHi.bind(paige)
setTimeout(boundF, 1000)

// you can also use call, it calls the function
// and binds the function to the object for the duration of this one execution
setTimeout(() => { user.sayHi.call(paige) }, 1000)

user.sayHi.call({ firstName: 'Leila' })
