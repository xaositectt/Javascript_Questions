'use strict'

let user = {
  name: 'Paige',
  getName: () => {
    return this;
  }
}

let name = user.getName();

console.log(name);
