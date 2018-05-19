'use strict'

//what is a closure? it's the combination of the function and its lexical environment/scope
//a function will be able to access the lexical scope it was defined in even if it's called outside of that scope
//to see it, we can execute a function outside of the scope where it was defined

function closureTry() {
  let info = 'FYI this is some information';

  function myReturnFunction() {
    return info;
  }

  return myReturnFunction;
}

console.log(closureTry()) //this will be the function body, because the return function is not executed
console.log(closureTry()()) //this will return the info because you execute the return function with the second () - the info is accessed!
