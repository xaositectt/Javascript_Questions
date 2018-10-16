// this will always log 2
// because the function definitions leak out of the blocks, and the later one always wins!

if (something) {
  function foo() {
    console.log("1");
  }
} else {
  function foo() {
    console.log("2");
  }
}

foo(); // always logs 2
