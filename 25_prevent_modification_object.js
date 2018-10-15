'use strict'

//how do you prevent the modification of an object?

let job = {
  owner: 'The Dude',
  description: 'doing nothing',
  favorites: {
    guns: 'patience',
    doors: 'the end',
  },
};

Object.seal(job);

//you can modify properties of a sealed object
job.owner = 'George';

//but you can't add new properties- throws an error!
// job.remark = 'That\'s like your opinion man';

console.log(job);

//you can't add or modify properties of a frozen object
Object.freeze(job);

//but you can modify object properties!
job.favorites.guns = 'paradise city';

//throws TypeError
// job.salary = 2000;

//throws TypeError
//job.owner = 'someone else';

//properties that are objects have modifiable properties
job.favorites.guns = "knockin' on heaven's door";
console.log(job);

//to truly freeze an object, you have to write a recursive function that goes through all properties,
//checks if they're objects and if yes freezes them too.


function trueFreeze(object) {
  Object.freeze(object);
  for (const key in object) {
    if (typeof object[key] === 'object') {
      trueFreeze(object[key]);
    }
  }
  return object;
}

trueFreeze(job);

// throws type error: can't assign to read only object....
// job.favorites.guns = 'sweet child of mine';
// console.log(job);
