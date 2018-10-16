'use strict'

// polyfill- taking the definition of a newer feature and producing a piece of code that's
// equivalent to the behavior, but is able to run in older JS environments.

// ES6 defines a utility called Number.isNaN(..) to provide an accurate non-buggy
// check for NaN values, deprecating the original isNaN(..) utility
//but you can create a polyfill for that utility. the if statement checks, if Number.isNan exists in the browser.
//NaN is the only value that is not equal to itself, to x !== x returns true.

if (!Number.isNaN) {
	Number.isNaN = function isNaN(x) {
		return x !== x;
	};
}
