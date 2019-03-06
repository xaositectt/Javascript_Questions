'use strict'

const s1 = 'Regex';
const s2 = 'gular re expression';

console.log(s1.match(/re/)); // logs null- case sensitive!
console.log(s2.match(/re/)); // [ 're', index: 6, input: 'gular re expression', groups: undefined ]

console.log(/re/.test(s1)) // logs false
console.log(/re/.test(s2)) // logs true

// you can also declare the regex like this

const reg = new RegExp('re');

console.log(typeof reg); // logs object

console.log(s2.match(reg));

// methods you can use with regex:

const sentence = 'the lord of murder shall perish'

console.log(sentence.split(/ /));
console.log(sentence.replace(/THE/i, 'SHIT'));
