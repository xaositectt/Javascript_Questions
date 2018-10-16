var x = 2, y = 3,

// o = {
//   x: x,
//   y: y
// };

// object literal shorthand
o = {
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
