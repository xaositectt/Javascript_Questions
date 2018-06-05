'use strict'

console.log('you get an error like: "use strict is not a function" unless there is something before the self-executing anonymous function');
//let statement: behaves similar to Java variables, variable is valid
//within the block it was created, cannot be re-declared

(function () {
  'use strict' //you can use use strict within a block

  let a = 10;
  console.log(a); // output 10
  if (true) {
    let a = 20;
    console.log(a); // output 20
  }
  console.log(a); // output 10
})()

//if you execute this it throws syntax error that a has already been declared
function letDeclaration(){
  let a =10;
  let a =20; //throws syntax error
  console.log(a); 
}

// letDeclaration();
function constDeclaration(){
  //cannot be redeclared like let
  //can't even be reassigned
  const a = 'this is a const';
  a = 'I want to change this';
}

//throws a TypeErrror error- you can't reassign constants
constDeclaration();

//if you execute this it doesn't throw an error like with the previous example!
function varDeclaration(){ 
  var a =10;   
  var a =20;   
  console.log(a);  //output 20 
}

varDeclaration();

//throws reference error if you want to log a variable declared with let or const before declaration
// console.log(myLet);
// let myLet = 'what is this';

// console.log(myConst);
// const myConst = 'and this';

//logs undefined in the case of var! 
console.log(myVar);
var myVar = 'what about this';
