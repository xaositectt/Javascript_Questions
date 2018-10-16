// you can execute generators as normal functions
// and pass them arguments
// executing a generator will produce an iterator that controls the generator code execution
// yield means the pause points, like in a debugger
// the number of yields is arbitrary
// yield can be in loops and can return a value

function *generator(){
  let x = 10;
  let y = 20;

  console.log(x, y);

  yield;

  let z = x + y;

  console.log(z);
}

let g = generator();
g.next(); // first part gets executed
g.next(); // second part gets executed

function *randomLoop() {
  let i = 0;
  while (i < 3) {
    yield Math.random();
    i++;
  }
}

let g2 = randomLoop();
console.log(g2.next()); // logs { value: 0.24161224652866142, done: false }
console.log(g2.next());
console.log(g2.next());
console.log(g2.next()); // logs { value: undefined, done: true }


//here the generator is paused at every yield, and the value of the elements is the yield value
function *foo() {
  var arr = [yield 1, yield 2, yield 3];
  console.log(arr, yield 4);
}

// will yield at every value
function* bar() {
  yield *[1, 2, 3];
}

let ba = bar();
console.log(ba.next()); // logs { value: 1, done: false }
console.log(ba.next());
console.log(ba.next());

// exact same as previous example
// function* foo() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* bar() {
//   yield* foo();
// }
