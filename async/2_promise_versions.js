// returns a promise back that will be fulfilled
// if all the values fulfill, or reject immediately once the first of any of them rejects

var p1 = Promise.resolve(42)
var p2 = new Promise(function pr(resolve) {
  setTimeout(function () {
    resolve(43)
  }, 100)
})
var v3 = 44
var p4 = new Promise(function pr(resolve, reject) {
  setTimeout(function () {
    reject("Oops")
  }, 10)
})

// returns an array of the resolved values
Promise.all([p1, p2, v3])
  .then(function fulfilled(vals) {
    console.log(vals) // [42,43,44]
  })

// because p4 is rejected, it goes to the rejected block
Promise.all([p1, p2, v3, p4])
  .then(
    function fulfilled(vals) {
      // never gets here
    },
    function rejected(reason) {
      console.log(reason) // Oops
    })

// or in the catch block
Promise.all([p1, p2, v3, p4])
  .then(
    function fulfilled(vals) {
      // never gets here
    }
  ).catch(function (err) {
    console.log(err)
  })

let promise1 = Promise.resolve(3)
let promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'))
let promises = [promise1, promise2]
// once everything is finished, returns an array with objects of {status, value, reason (if error)}
Promise.allSettled(promises)
  .then(result => result.forEach(res => console.log(res)))

promise1 = Promise.reject(0)
promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'))
promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'))

promises = [promise1, promise2, promise3]

// doesnt work in node apparently
// Promise.any(promises).then((value) => console.log(value))

// fires once either resolve or reject or then or catch are done
// p.finally(function() {
//   // settled (fulfilled or rejected)
// })
