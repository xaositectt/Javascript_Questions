'use strict'

// An optional second argument can be passed to JSON.stringify(..)
// that is called replacer. This argument can either be an array or a function.
// It's used to customize the recursive serialization of an object by providing
// a filtering mechanism for which properties should and should not be included
var a = {
	b: 42,
	c: "42",
	d: [1,2,3]
}

JSON.stringify( a, ["b","c"] ) // "{"b":42,"c":"42"}"

JSON.stringify( a, function(k,v){
	if (k !== "c") return v
} )
// "{"b":42,"d":[1,2,3]}"
