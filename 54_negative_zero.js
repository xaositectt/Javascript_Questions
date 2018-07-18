'use strict'

// there is both positive and negative zero in JS

console.log(0/1);
console.log(0/-1);

// stringified it will be turned into 0
console.log((0/-1).toString()); 

console.log(-0 + "");

// strangely, even JSON gets in on the deception
console.log(JSON.stringify( 0/-2 ));

// reverse operations keep the nature of the  zero

console.log(+"-0");				// -0
console.log(Number( "-0" ));		// -0
console.log(JSON.parse( "-0" ));	// -0

// the operators will yield surprising values

console.log(0 === -0); //true
console.log(0 == -0); //true
console.log(0 > -0); //false

// funtcion to tell if a value is negative zero: 

function isNegZero(n) {
	n = Number( n );
	return (n === 0) && (1 / n === -Infinity);
}
