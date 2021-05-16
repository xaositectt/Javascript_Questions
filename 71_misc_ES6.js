var x = 2, y = 3

// o = {
//   x: x,
//   y: y
// };

// object literal shorthand
let o = {
  x,
  y
};
console.log(o);

// object function declaration shorthand
let obj = {
  x() {
    console.log('it\'s x');
  },
  y() {
    console.log('it\'s y');
  }
}

obj.x();

// interpolated expressions
function upper(s) {
  return s.toUpperCase();
}

var who = "reader";

var text =
  `A very ${upper( "warm" )} welcome
to all of you ${upper( `${who}s` )}!`;

console.log(text);
// A very WARM welcome
// to all of you READERS!

// string raw- shows the raw string with escape symbols etc.
console.log('hi \n there');
console.log(String.raw`hi \n there`)

// for ... of loop
let a = ["a", "b", "c", "d", "e"];

for (var idx in a) {
  console.log(idx);
}
// 0 1 2 3 4
