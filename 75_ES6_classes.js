// always use the function shorthand - super only works in these
// class identifies a block where the contents define the prototype of a function


class Foo {
  constructor(a, b) {
    this.x = a;
    this.y = b;
  }

  gimmeXY() {
    return this.x * this.y;
  }
}

// in a constructor of a subclass, you cannot access this until super(..) has been called
class Bar extends Foo {
  constructor(a, b, c) {
    super(a, b);
    this.z = c;
  }

  gimmeXYZ() {
    return this.x * this.y * this.z;
  }
}

const what = new Bar(1, 2, 3);

console.log(what.gimmeXY());
console.log(what.gimmeXYZ());

console.log(what instanceof Bar)
console.log(what instanceof Foo)

// we can extend built in classes
class MyCoolArray extends Array {
	first() { return this[0]; }
	last() { return this[this.length - 1]; }
}

var a = new MyCoolArray( 1, 2, 3 );

a.length;					// 3
a;							// [1,2,3]

a.first();					// 1
a.last()

// extended error objects like this capture stack information about the file and line number
// not like plain old Error objects that just display a note
class Oops extends Error {
	constructor(reason) {
		super(reason);
		this.oops = reason;
	}
}

// later:
var ouch = new Oops( "I messed up!" );
throw ouch;

// the new.target points to the constructor that "new" invoked
class Foo {
  constructor() {
    console.log("Foo: ", new.target.name);
  }
}

class Bar extends Foo {
  constructor() {
    super();
    console.log("Bar: ", new.target.name);
  }
  baz() {
    console.log("baz: ", new.target);
  }
}

var a = new Foo();
// Foo: Foo

var b = new Bar();
// Foo: Bar   <-- respects the `new` call-site
// Bar: Bar

b.baz();
// baz: undefined

// you can use static functions just like in Java
// these are added directly to that class's function object, not to the function object's prototype object
class Foo {
	static cool() { console.log( "cool" ); }
	wow() { console.log( "wow" ); }
}

class Bar extends Foo {
	static awesome() {
		super.cool();
		console.log( "awesome" );
	}
	neat() {
		super.wow();
		console.log( "neat" );
	}
}

Foo.cool();					// "cool"
Bar.cool();					// "cool"
Bar.awesome();				// "cool"
							// "awesome"

var b = new Bar();
b.neat();					// "wow"
							// "neat"

b.awesome;					// undefined
b.cool;						// undefined
