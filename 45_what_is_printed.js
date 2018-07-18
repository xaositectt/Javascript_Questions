var myObject = {
  foo: "bar",
  func: function() {
      var self = this;
      console.log("outer func:  this.foo = " + this.foo);
      console.log("outer func:  self.foo = " + self.foo);
      (function() {
          console.log("inner func:  this.foo = " + this.foo);
          console.log("inner func:  self.foo = " + self.foo);
      }());
  }
};
myObject.func();

// In the outer function, both this and self refer to myObject and t
// herefore both can properly reference and access foo.

// In the inner function, though, this no longer refers to myObject. 
// As a result, this.foo is undefined in the inner function, whereas 
// the reference to the local variable self remains in scope and is accessible there.
