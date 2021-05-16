'use strict'

function promiseTest(a) {
  return new Promise(function(resolve, reject) {
    if (a > 0) {
      console.log('resolved')
      resolve(a)
    } else {
      console.log('rejected')
      reject(0)
    }
  })
}

async function getIt(promise) {
  const result = await promise.catch(e => console.log('error', e)) || 'no result'
  console.log('the result is')
  console.log(result)
}

getIt(promiseTest(-10))
