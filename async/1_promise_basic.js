// basic Promise construct
// Promises are asynchronous but can be used with simple values to demonstrate:

let testPromise1 = new Promise(function(resolve, reject){
  let x = 0;
  if (x > 0.5) {
    resolve(x);
  } else {
    reject(x);
  }
})

// this will trigger the reject because it's smaller than 0.5, catched by the catch listener
testPromise1.then(value => { console.log(value) }).catch(err => { console.log('error, msg: ', err)});

// different way to listen for the error
// the catch block doesn't fire because the 2nd default function in the then catches the error
// but if an error or rejection happens in the fulfilled function, the catch catches that
testPromise1
.then(fulfilled => {
  console.log('promise has been fulfilled ',fulfilled)
}, rejected => {
  console.log('promise has been rejected', rejected)
}).catch(err => { console.log('error has been catched ', err) });

// here the misspelled console log error goes to the catch block!
testPromise1
.then(fulfilled => {
  console.log('promise has been fulfilled ',fulfilled)
}, rejected => {
  conle.log('promise has been rejected', rejected)
}).catch(err => { console.log('error has been catched ', err) });

var testPromise2 = new Promise(function(resolve, reject){
  let x = 1;
  if (x > 0.5) {
    resolve(x);
  } else {
    reject(x);
  }
})

// this will trigger the resolve, catched by the then
testPromise2.then(value => { console.log('success, msg: ',value) }).catch(err => { console.log('error, msg: ', err)});

// these are the same
var p1 = Promise.resolve(42);

var p2 = new Promise(function pr(resolve) {
  resolve(42);
});

// similarly, these are the same
var p3 = Promise.reject("Oops");

var p4 = new Promise(function pr(resolve, reject) {
  reject("Oops");
});

// it's the same if you use it with a real promise
// var theP = ajax(..);

// var p1 = Promise.resolve(theP);

// var p2 = new Promise(function pr(resolve) {
//   resolve(theP);
// });
