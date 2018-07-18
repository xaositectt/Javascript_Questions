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

job.owner = 'George';

console.log(job);

Object.freeze(job);

//you can modify object properties of objects!
job.favorites.guns = 'paradise city';

//throws TypeError
// job.salary = 2000;

//throws TypeError
//job.owner = 'someone else';

//properties that are objects have modifiable properties
job.favorites.guns = "knowkin' on heaven's door";
console.log(job);
