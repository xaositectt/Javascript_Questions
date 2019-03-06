// . means arbitrary character
// . can be any character except the new line

const s1 = 'Hello \nthere wanderer';
console.log(s1);

// . means arbitrary char- five letter string that ends with o
console.log('testing . ', /....o/.test(s1)); // logs true
console.log(/.....o/.test(s1)); // six letters- logs false
console.log(/......\n/.test(s1)); // logs true- six chars after that a newline

// + means at least one char
console.log('testing + ', /Hel+/.test(s1)); // at least one l character after the e

// | means OR
console.log('testing | ', /Hello|whatever|yoyoyo/.test(s1)); // logs true
console.log('testing | ', /hello|whatever|yoyoyo/.test(s1)); // logs false

// () can be used for grouping
console.log(/H(a|e|i)llo/.test(s1)); // logs true- tests for Hallo, Hello, Hillo

// start of string: ^ end of string: $
console.log('testing ^', /^H/.test(s1)); // logs true
console.log(/^A/.test(s1)); // logs false
console.log(/A$/.test(s1)); // logs false
console.log('testing $', /r$/.test(s1)); // logs true
// tests if only x is present
console.log(/^x$/.test(s1)); // logs false
console.log(/^Hello \nthere wanderer$/.test(s1)); // logs true

// \b works as "boundary"- start or end
console.log(/\bH/.test(s1)); // logs true
console.log(/r\b/.test(s1)); // logs true


// using together with |
console.log('using together with OR:', /^list|lost|lust$/.test('listlust')); //logs true
// the ^ and $ have higher priority than the |
// so it's the same as this: checks if either starts with list, contains lost or ends with lust
console.log('using together with OR:', /(^list)|lost|(lust$)/.test('listdahhaha')); //logs true
console.log('using together with OR:', /(^list)|lost|(lust$)/.test('dahlosthaha')); //logs true
console.log('using together with OR:', /(^list)|lost|(lust$)/.test('listdahhahalust')); //logs true

// grouped this way the | gets its priority so it only checks if one of the
// rules is exactly the beginning/end and no more characters
console.log(/^(list|lost|lust)$/.test('listlost')); //logs false
console.log(/^(list|lost|lust)$/.test('list')); //logs true

// modifiers
// global- doesn't stop at the first result, returns an array [ 'e', 'e', 'e', 'e', 'e' ]
console.log(s1.match(/e/g));
// case insensitive
console.log(/h/i.test(s1)); // logs true
// multiline- m, ^ and $ will work on every line instead of whole string
console.log(/o.$/m.test(s1)); // logs true
console.log(/o.$/.test(s1)); // logs false

// multiline- can be used together with global
const xRow =/^x+$/mg;
const multi = 'xx\nxnxnx\nXX\nxxxx';
console.log('testing multiline regex', multi.match(xRow));

// unicode chars
console.log(/\u{78}/u.test('x')); // logs true
