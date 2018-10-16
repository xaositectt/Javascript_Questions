'use strict'

// super can be used only inside object functions with the shorthand syntax!!
// you use the

let o0 = {
  fooo() {
    console.log('hi Erika');
  }
}

let o1 = {
  foo() {
    console.log("o1:foo");
  }
};

// calling super calls the closest parent in the prototype chain that has the required function name
let o2 = {
  foo() {
    super.foo();
    super.fooo();
    console.log("o2:foo");
  }
};

Object.setPrototypeOf(o1, o0);
Object.setPrototypeOf(o2, o1);

o2.foo();
// o1:foo
// hi Erika
// o2:foo
