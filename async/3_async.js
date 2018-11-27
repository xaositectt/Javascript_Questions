
function promiseGen(num, cond){
  return new Promise(function (resolve, reject) {
    if (num > cond) {
      conole.log(num);
      resolve(num);
    } else {
      reject(num);
    }
  }).catch(e => console.log(e));
}

// waiting for a promise with the await keyword
// represents a value of the promise that it is waiting for. the function is evaluated in the event loop
// the await expression stops the execution of the function until the promise value is done
async function asyncCall(futureValue, num, cond) {
  let result = await futureValue(num, cond);
  console.log(result);
}

asyncCall(promiseGen, 10, 5);
