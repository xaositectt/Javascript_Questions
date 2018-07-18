'use strict'

// these are the only values that are falsy

if (!undefined) {
  console.log('it\'s falsy');
}

if (!null) {
  console.log('it\'s falsy');
}

if (!false) {
  console.log('it\'s falsy');
}

if (!(+0 || -0 || NaN)) {
  console.log('they\'re falsy');
}

if (!'') {
  console.log('it\'s falsy');
}


//these will be all true because they're not on the falsy list!
var a = new Boolean( false );
var b = new Number( 0 );
var c = new String( "" );

console.log(Boolean( a && b && c ));

var d = 'false';
var e = '0';
var f = "''";

console.log(Boolean( d && e && f ));

var g = [];
var h = {};
var i = function(){};

console.log(Boolean( g && h && i ));
