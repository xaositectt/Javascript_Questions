'use strict'

//design pattern that restricts the instantiation of a class to one object. A singleton should be immutable by the consuming code.
//with Object.freeze, we make the instance of the class immutable.
class UserStore {
  constructor(){
    this._data = []
    return UserStore.instance
  }

 add(item){
    this._data.push(item)
  }

  get(id){
    return this._data.find(d => d.id === id)
  }
}

const instance = new UserStore()
Object.freeze(instance)

console.log(instance)
try {
  instance.something = 'something'
} catch (e) {
  console.log('the error is', e)
}

exports.instance = instance

