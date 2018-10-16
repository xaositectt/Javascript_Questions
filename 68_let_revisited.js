
'use strict'
//you can create block scopes like this

{
  let a = 0;
  {
    let a = 1;
    console.log(a); // logs 1
  }
  console.log(a); // logs 0
  function meow() { console.log('meow') }
}

// meow(); // throws a reference error, meow is not defined- only with use strict. without use strict it leaks to global scope

let b; //this is almost equivalent to let b = undefined, except this will throw an error:

// `a` is not declared
if (typeof a === "undefined") {
  console.log( "Erika" );
}

// `b` is declared, but in its TDZ- Temporal Dead Zone, variable, that's declared but not yet initialized
// if (typeof b === "undefined") {		// ReferenceError!
//   console.log('Eleniak')
// }

//let defines a block scoped variable, which is useful with loops

let funcs = [];

for (var i = 0; i < 5; i++) {
  funcs.push(function(){
    console.log(i);
  })
}

// logs 5, because there is only var = i! var is function scoped not block scoped so it's a leaked global variable now
// and we're logging the same thing 5 times.
funcs[0]();
console.log(i); //logs 5

funcs = [];

// works perfectly as intended with let, because let is block scoped and a new i is created for every iteration.
for (let i = 0; i < 5; i++) {
  funcs.push(function(){
    console.log(i);
  })
}

funcs[0]();

funcs = [];

// works now because the added block scoped i declaration takes care of the problem of k being global
for (var k = 0; k < 5; k++) {
  let i = k;
  funcs.push(function () {
    console.log(i);
  })
}

funcs[0]();
