// 'use strict'
// if I use use strict, the functions don't leak out to the global scope!
// this will always log 2
// because the function definitions leak out of the blocks, and the later one always wins!

if (undefined) {
  function foo() {
    console.log("1");
  }
} else {
  function foo() {
    console.log("2");
  }
}

foo(); // always logs 2
